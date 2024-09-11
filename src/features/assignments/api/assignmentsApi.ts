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
import { groupBy, pick, toMap } from '@/utils';
import { Company, Contact } from '@/api/gql/graphql';

export type Assignment = AssignmentRecord & {
  responsibleContacts: Contact[];
  externalContact: Contact | undefined;
  company: Company | undefined;
};

export type AssignmentRecord = {
  id: string;
  assignmentName: string;
  externalContactId: string;
  companyId: string;
  relevantFiles: string;
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

export const fetchAssignments = async (): Promise<Assignment[]> => {
  const [assignments, responsibleContacts, contacts, companies] = await Promise.all([
    query<Assignment>(`SELECT * FROM assignments ORDER BY assignment_name`),
    query<ResponsibleContact>(`SELECT * FROM assignment_responsible_contacts`),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'id');
  const companiesMap = toMap(companies, 'id');

  return assignments.map(transformAssignment(responsibleContactsMap, contactsMap, companiesMap));
};

export const fetchAssignment = async (id: string): Promise<Assignment> => {
  const [assignment, responsibleContacts, contacts, companies] = await Promise.all([
    selectOneQuery<AssignmentRecord>('assignments', { id }),
    selectAllQuery<ResponsibleContact>('assignment_responsible_contacts', { assignmentId: id }),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'id');
  const companiesMap = toMap(companies, 'id');

  return transformAssignment(responsibleContactsMap, contactsMap, companiesMap)(assignment);
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  const record = await insertQuery<AssignmentRecord>(
    'assignments',
    pick({ ...assignment, id: uuidv4() }, [
      'id',
      'assignmentName',
      'externalContactId',
      'companyId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ])
  );
  await createAssignmentResponsibleContacts({ ...assignment, ...record });
  return record;
};

export const updateAssignment = async (assignment: Partial<Assignment>) => {
  await updateQuery<AssignmentRecord>(
    'assignments',
    pick(assignment, ['assignmentName', 'externalContactId', 'companyId', 'relevantFiles', 'fee', 'type', 'status']),
    pick(assignment, ['id'])
  );
  await updateAssignmentResponsibleContacts(assignment);
};

export const deleteAssignment = async ({ id }: Pick<Assignment, 'id'>) => {
  await deleteQuery<AssignmentRecord>('assignments', { id });
  await deleteAssignmentResponsibleContacts({ id });
};

function transformAssignment(
  responsibleContactsMap: Map<string, ResponsibleContact[]>,
  contactsMap: Map<string, Contact>,
  companiesMap: Map<string, Company>
): (value: AssignmentRecord) => Assignment {
  return (assignment: AssignmentRecord) => {
    const responsibleContactsList = responsibleContactsMap.get(assignment.id) || [];
    const responsibleContactIds = responsibleContactsList.map((c) => c.contactId);
    const responsibleContacts = responsibleContactIds.map((contactId) => contactsMap.get(contactId)).filter((c) => !!c);
    const externalContact = contactsMap.get(assignment.externalContactId);
    const company = companiesMap.get(assignment.companyId);

    return { ...assignment, responsibleContacts, externalContact, company };
  };
}

export const fetchAssignmentStatuses = async () => {
  const assignmentStatuses = await query<{ status: string }>(`SELECT DISTINCT status FROM assignments`);
  return assignmentStatuses.map(({ status }) => status).filter(Boolean);
};

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
