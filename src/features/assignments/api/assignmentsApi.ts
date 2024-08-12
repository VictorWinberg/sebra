import { deleteQuery, insertQuery, query, selectOneQuery, updateQuery } from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';
import { pick, toMap } from '@/utils';

export type Assignment = {
  assignmentId: number;
  assignmentName: string;
  responsiblePersonId: number;
  externalContactPersonId: number;
  companyId: number;
  relevantFiles: string;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type AssignmentData = Assignment & {
  responsiblePerson: Contact | undefined;
  externalContactPerson: Contact | undefined;
  company: Company | undefined;
};

export const fetchAssignments = async (): Promise<AssignmentData[]> => {
  const assignments = await query<Assignment>(`SELECT * FROM assignments ORDER BY assignment_name`);
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'contactId');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'companyId');
  return assignments.map(transformAssignment(contacts, companies));
};

export const fetchAssignment = async (assignmentId: number): Promise<AssignmentData> => {
  const assignment = await selectOneQuery<Assignment>('assignments', { assignmentId });
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'contactId');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'companyId');
  return transformAssignment(contacts, companies)(assignment);
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  return await insertQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'companyId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ])
  );
};

export const updateAssignment = async (assignment: Partial<Assignment>) => {
  return await updateQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'companyId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ]),
    pick(assignment, ['assignmentId'])
  );
};

export const deleteAssignment = async ({ assignmentId }: Pick<Assignment, 'assignmentId'>) => {
  return await deleteQuery<Assignment>('assignments', { assignmentId });
};

function transformAssignment(
  contacts: Map<string | number, Contact>,
  companies: Map<string | number, Company>
): (value: Assignment) => AssignmentData {
  return (assignment) => {
    const responsiblePerson = contacts.get(assignment.responsiblePersonId);
    const externalContactPerson = contacts.get(assignment.externalContactPersonId);
    const company = companies.get(assignment.companyId);

    return { ...assignment, responsiblePerson, externalContactPerson, company };
  };
}

export const fetchAssignmentStatuses = async () => {
  const assignmentStatuses = await query<{ status: string }>(`SELECT DISTINCT status FROM assignments`);
  return assignmentStatuses.map(({ status }) => status).filter(Boolean);
};
