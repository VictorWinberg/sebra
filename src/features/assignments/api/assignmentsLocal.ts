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
import {
  Assignment,
  Company,
  Contact,
  CreateAssignmentMutation,
  DeleteAssignmentMutation,
  GetAssignmentQuery,
  GetAssignmentQueryVariables,
  GetAssignmentsQuery,
  UpdateAssignmentMutation,
  Workspace
} from '@/api/gql/graphql';
import { FlatCompany } from '@/features/companies/api/companiesLocal';
import { FlatContact } from '@/features/contacts/api/contactsLocal';
import { AssertKeys, groupBy, pick, toMap } from '@/utils';

type LocalAssignment = {
  id: string;
  assignmentName: string;
  externalContact: Contact;
  responsibleContacts?: Contact[];
  company?: Company;
  fee: number;
  type: string;
  status: string;
  workspace?: Workspace;
  createdAt: string;
  updatedAt: string;
};

type ResponsibleContact = {
  assignmentId: string;
  contactId: string;
};

export const verify: AssertKeys<LocalAssignment, Omit<Assignment, '__typename'>> = true;

export type FlatAssignment = Omit<Assignment, 'externalContact' | 'company' | 'responsibleContacts' | 'workspace'> & {
  externalContact: string;
  company?: string;
};

export const getAssignmentsLocal = async (): Promise<GetAssignmentsQuery> => {
  const [assignments, responsibleContacts, contacts, companies] = await Promise.all([
    query<FlatAssignment>(`SELECT * FROM assignments ORDER BY assignment_name`),
    query<ResponsibleContact>(`SELECT * FROM assignment_responsible_contacts`),
    query<FlatContact>(`SELECT * FROM contacts`),
    query<FlatCompany>(`SELECT * FROM companies`)
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
    query<FlatContact>(`SELECT * FROM contacts`),
    query<FlatCompany>(`SELECT * FROM companies`)
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

  const assignment = await insertQuery<FlatAssignment>('assignments', params);
  await createAssignmentResponsibleContacts({ ...data, id: assignment.id });
  return { createAssignment: assignment };
};

export const updateAssignmentLocal = async (data: Assignment): Promise<UpdateAssignmentMutation> => {
  const params = pick({ ...data, externalContact: data.externalContact?.id, company: data.company?.id }, [
    'assignmentName',
    'externalContact',
    'company',
    'fee',
    'type',
    'status'
  ]);
  const assignment = await updateQuery<FlatAssignment>('assignments', params, pick(data, ['id']));
  await updateAssignmentResponsibleContacts(data);
  return { updateAssignment: assignment };
};

export const deleteAssignmentLocal = async ({ id }: Pick<Assignment, 'id'>): Promise<DeleteAssignmentMutation> => {
  await deleteQuery<FlatAssignment>('assignments', { id });
  await deleteAssignmentResponsibleContacts({ id });
  return { deleteAssignment: { id } };
};

function transformFlatAssignment(
  responsibleContactsMap: Map<string, ResponsibleContact[]>,
  contactsMap: Map<string, FlatContact>,
  companiesMap: Map<string, FlatCompany>
): (value: FlatAssignment) => Assignment {
  return (assignment: FlatAssignment) => {
    const responsibleContacts = (responsibleContactsMap.get(assignment.id) || [])
      .map((contact) => contact.contactId)
      .map((contactId) => contactsMap.get(contactId))
      .filter((contact) => !!contact)
      .map((contact) => ({ ...contact, company: companiesMap.get(contact.company || '') }));

    const [externalContact] = [contactsMap.get(assignment.externalContact)].map((contact) =>
      contact ? { ...contact, company: companiesMap.get(contact.company || '') } : undefined
    );

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
