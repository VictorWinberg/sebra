import { v4 as uuidv4 } from 'uuid';

import {
  deleteQuery,
  insertManyQuery,
  insertQuery,
  query,
  selectAllQuery,
  selectOneQuery,
  updateQuery
} from '@/api/DummyDB';
import { AssertKeys, groupBy, pick, toMap } from '@/utils';
import {
  Assignment,
  Company,
  Contact,
  CreateAssignmentMutation,
  DeleteAssignmentMutation,
  GetAssignmentQuery,
  GetAssignmentQueryVariables,
  GetAssignmentsQuery,
  UpdateAssignmentMutation
} from '@/api/gql/graphql';

type LocalAssignment = {
  id: string;
  assignmentName: string;
  externalContact: Contact;
  responsibleContacts?: Contact[];
  company?: Company;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type ResponsibleContact = {
  assignmentId: string;
  contactId: string;
};

export const verify: AssertKeys<LocalAssignment, Omit<Assignment, '__typename'>> = true;

type FlatAssignment = Omit<Assignment, 'externalContact' | 'company' | 'responsibleContacts'> & {
  externalContact: string;
  company?: string;
};

export const getAssignmentsLocal = async (): Promise<GetAssignmentsQuery> => {
  const [assignments, responsibleContacts, contacts, companies] = await Promise.all([
    query<FlatAssignment>(`SELECT * FROM assignments ORDER BY assignment_name`),
    query<ResponsibleContact>(`SELECT * FROM assignment_responsible_contacts`),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'id');
  const companiesMap = toMap(companies, 'id');
  const docs = assignments.map(transformFlatAssignment(responsibleContactsMap, contactsMap, companiesMap));

  return { Assignments: { docs } };
};

export const getAssignmentLocal = async ({ id }: GetAssignmentQueryVariables): Promise<GetAssignmentQuery> => {
  const [assignment, responsibleContacts, contacts, companies] = await Promise.all([
    selectOneQuery<FlatAssignment>('assignments', { id }),
    selectAllQuery<ResponsibleContact>('assignment_responsible_contacts', { assignmentId: id }),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'id');
  const companiesMap = toMap(companies, 'id');

  return { Assignment: transformFlatAssignment(responsibleContactsMap, contactsMap, companiesMap)(assignment) };
};

export const createAssignmentLocal = async (data: Assignment): Promise<CreateAssignmentMutation> => {
  const params = pick({ ...data, id: uuidv4(), externalContact: data.externalContact?.id, company: data.company?.id }, [
    'id',
    'assignmentName',
    'externalContact',
    'company',
    'fee',
    'type',
    'status'
  ]);

  const record = await insertQuery<FlatAssignment>('assignments', params);
  await createAssignmentResponsibleContacts({ ...data, id: record.id });
  return { createAssignment: record };
};

export const updateAssignmentLocal = async (assignment: Assignment): Promise<UpdateAssignmentMutation> => {
  const params = pick(
    { ...assignment, externalContact: assignment.externalContact?.id, company: assignment.company?.id },
    ['assignmentName', 'externalContact', 'company', 'fee', 'type', 'status']
  );
  const record = await updateQuery<FlatAssignment>('assignments', params, pick(assignment, ['id']));
  await updateAssignmentResponsibleContacts(assignment);
  return { updateAssignment: record };
};

export const deleteAssignmentLocal = async ({ id }: Pick<Assignment, 'id'>): Promise<DeleteAssignmentMutation> => {
  await deleteQuery<FlatAssignment>('assignments', { id });
  await deleteAssignmentResponsibleContacts({ id });
  return { deleteAssignment: { id } };
};

function transformFlatAssignment(
  responsibleContactsMap: Map<string, ResponsibleContact[]>,
  contactsMap: Map<string, Contact>,
  companiesMap: Map<string, Company>
): (value: FlatAssignment) => Assignment {
  return (assignment: FlatAssignment) => {
    const responsibleContactsList = responsibleContactsMap.get(assignment.id) || [];
    const responsibleContactIds = responsibleContactsList.map((c) => c.contactId);
    const responsibleContacts = responsibleContactIds.map((contactId) => contactsMap.get(contactId)).filter((c) => !!c);
    const externalContact = contactsMap.get(assignment.externalContact);
    const company = companiesMap.get(assignment.company || '');

    return { ...assignment, responsibleContacts, externalContact, company };
  };
}

// Logic for responsible contacts
const createAssignmentResponsibleContacts = async ({ id: assignmentId, responsibleContacts }: Partial<Assignment>) => {
  if (!assignmentId || !responsibleContacts) return;

  await insertManyQuery<ResponsibleContact>(
    'assignment_responsible_contacts',
    responsibleContacts.map(({ id: contactId }) => ({ assignmentId: assignmentId, contactId }))
  );
};

const updateAssignmentResponsibleContacts = async (assignment: Partial<Assignment>) => {
  await deleteAssignmentResponsibleContacts(assignment);
  await createAssignmentResponsibleContacts(assignment);
};

const deleteAssignmentResponsibleContacts = async ({ id }: Partial<Assignment>) => {
  if (!id) return;
  await deleteQuery<ResponsibleContact>('assignment_responsible_contacts', { assignmentId: id });
};
