import {
  deleteQuery,
  insertManyQuery,
  insertQuery,
  query,
  selectAllQuery,
  selectOneQuery,
  updateQuery
} from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';
import { groupBy, pick, toMap } from '@/utils';

export type Assignment = AssignmentRecord & {
  responsibleContacts: Contact[];
  externalContact: Contact | undefined;
  company: Company | undefined;
};

export type AssignmentRecord = {
  assignmentId: number;
  assignmentName: string;
  externalContactId: number;
  companyId: number;
  relevantFiles: string;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type ResponsibleContact = {
  assignmentId: number;
  contactId: number;
};

export const fetchAssignments = async (): Promise<Assignment[]> => {
  const [assignments, responsibleContacts, contacts, companies] = await Promise.all([
    query<Assignment>(`SELECT * FROM assignments ORDER BY assignment_name`),
    query<ResponsibleContact>(`SELECT * FROM assignment_responsible_contacts`),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'contactId');
  const companiesMap = toMap(companies, 'companyId');

  return assignments.map(transformAssignment(responsibleContactsMap, contactsMap, companiesMap));
};

export const fetchAssignment = async (assignmentId: number): Promise<Assignment> => {
  const [assignment, responsibleContacts, contacts, companies] = await Promise.all([
    selectOneQuery<AssignmentRecord>('assignments', { assignmentId }),
    selectAllQuery<ResponsibleContact>('assignment_responsible_contacts', { assignmentId }),
    query<Contact>(`SELECT * FROM contacts`),
    query<Company>(`SELECT * FROM companies`)
  ]);

  const responsibleContactsMap = groupBy(responsibleContacts, 'assignmentId');
  const contactsMap = toMap(contacts, 'contactId');
  const companiesMap = toMap(companies, 'companyId');

  return transformAssignment(responsibleContactsMap, contactsMap, companiesMap)(assignment);
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  const record = await insertQuery<AssignmentRecord>(
    'assignments',
    pick(assignment, ['assignmentName', 'externalContactId', 'companyId', 'relevantFiles', 'fee', 'type', 'status'])
  );
  await createAssignmentResponsibleContacts({ ...assignment, ...record });
  return record;
};

export const updateAssignment = async (assignment: Partial<Assignment>) => {
  await updateQuery<AssignmentRecord>(
    'assignments',
    pick(assignment, ['assignmentName', 'externalContactId', 'companyId', 'relevantFiles', 'fee', 'type', 'status']),
    pick(assignment, ['assignmentId'])
  );
  await updateAssignmentResponsibleContacts(assignment);
};

export const deleteAssignment = async ({ assignmentId }: Pick<Assignment, 'assignmentId'>) => {
  await deleteQuery<AssignmentRecord>('assignments', { assignmentId });
  await deleteAssignmentResponsibleContacts({ assignmentId });
};

function transformAssignment(
  responsibleContactsMap: Map<number, ResponsibleContact[]>,
  contactsMap: Map<number, Contact>,
  companiesMap: Map<number, Company>
): (value: AssignmentRecord) => Assignment {
  return (assignment: AssignmentRecord) => {
    const responsibleContactsList = responsibleContactsMap.get(assignment.assignmentId) || [];
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

const createAssignmentResponsibleContacts = async ({ assignmentId, responsibleContacts }: Partial<Assignment>) => {
  if (!assignmentId || !responsibleContacts) return;

  await insertManyQuery<ResponsibleContact>(
    'assignment_responsible_contacts',
    responsibleContacts.map(({ contactId }) => ({ assignmentId, contactId }))
  );
};

const updateAssignmentResponsibleContacts = async (assignment: Partial<Assignment>) => {
  await deleteAssignmentResponsibleContacts(assignment);
  await createAssignmentResponsibleContacts(assignment);
};

const deleteAssignmentResponsibleContacts = async ({ assignmentId }: Partial<Assignment>) => {
  if (!assignmentId) return;
  await deleteQuery<ResponsibleContact>('assignment_responsible_contacts', { assignmentId });
};
