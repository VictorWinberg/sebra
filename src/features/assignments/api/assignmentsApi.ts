import {
  deleteParameterizedQuery,
  insertParameterizedQuery,
  query,
  selectParameterizedQuery,
  updateParameterizedQuery
} from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';
import { pick, toMap } from '@/utils';

export type Assignment = {
  assignmentId: number;
  assignmentName: string;
  responsiblePersonId: number;
  externalContactPersonId: number;
  relevantFiles: string;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchAssignments = async () => {
  const assignments = await query<Assignment>(`SELECT * FROM assignments`);
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'contactId');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'companyId');
  return assignments.map(transformAssignment(contacts, companies));
};

export const fetchAssignment = async (assignmentId: number) => {
  return await selectParameterizedQuery<Assignment>('assignments', { assignmentId });
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  await insertParameterizedQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ])
  );
};

export const updateAssignment = async (assignment: Partial<Assignment>) => {
  await updateParameterizedQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ]),
    pick(assignment, ['assignmentId'])
  );
};

export const deleteAssignment = async ({ assignmentId }: Pick<Assignment, 'assignmentId'>) => {
  await deleteParameterizedQuery<Assignment>('assignments', { assignmentId });
};

function transformAssignment(
  contacts: Map<string | number, Contact>,
  companies: Map<string | number, Company>
): (
  value: Assignment,
  index: number,
  array: Assignment[]
) => Assignment & {
  responsiblePerson: (Contact & { company: Company | undefined }) | undefined;
  externalContactPerson: (Contact & { company: Company | undefined }) | undefined;
} {
  return (assignment) => {
    const responsiblePerson = contacts.get(assignment.responsiblePersonId);
    const responsiblePersonCompany = responsiblePerson && companies.get(responsiblePerson.companyId);
    const externalContactPerson = contacts.get(assignment.externalContactPersonId);
    const externalContactPersonCompany = externalContactPerson && companies.get(externalContactPerson.companyId);

    return {
      ...assignment,
      responsiblePerson: { ...responsiblePerson!, company: responsiblePersonCompany },
      externalContactPerson: { ...externalContactPerson!, company: externalContactPersonCompany }
    };
  };
}
