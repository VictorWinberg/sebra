import AssignmentForm, { AssignmentFormProps } from '@/features/assignments/components/AssignmentForm';
import { assignmentColumns, AssignmentData } from '@/features/assignments/config/AssignmentConfig';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import CompanyForm, { CompanyFormProps } from '@/features/companies/components/CompanyForm';
import { companyColumns, CompanyData } from '@/features/companies/config/CompanyConfig';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import ContactForm, { ContactFormProps } from '@/features/contacts/components/ContactForm';
import { contactColumns, ContactData } from '@/features/contacts/config/ContactConfig';
import { useCreateContact } from '@/features/contacts/hooks/useContactsMutations';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { DataTableProps } from '@/hooks/useDataTable';
import { ModuleFormConfigItem } from '../components/ModuleForm';
import { ModuleTableConfigItem } from '../components/ModuleTable';
import { Assignment } from '@/features/assignments/api/assignmentsApi';

export type AnyData = object;

export interface ModuleBaseConfigItem {
  key: string;
  label: string;
}

type ModuleFormConfig<M extends AnyData, P> = ModuleFormConfigItem<M, P>;
type ModuleTableConfig<M extends AnyData> = ModuleTableConfigItem<M, DataTableProps<M>>;
export type ModuleConfigItem<M extends AnyData, P = unknown> = ModuleFormConfig<M, P> | ModuleTableConfig<M>;

export const modules: ModuleConfigItem<AnyData>[] = [
  {
    key: 'companyForm',
    label: 'Företagsformulär',
    type: 'form',
    FormComponent: CompanyForm,
    createMutation: useCreateCompany
  } satisfies ModuleFormConfigItem<CompanyData, CompanyFormProps>,
  {
    key: 'assignmentForm',
    label: 'Uppdragsformulär',
    type: 'form',
    FormComponent: AssignmentForm,
    createMutation: useCreateAssignment
  } satisfies ModuleFormConfigItem<Assignment, AssignmentFormProps>,
  {
    key: 'contactForm',
    label: 'Kontaktpersonsformulär',
    type: 'form',
    FormComponent: ContactForm,
    createMutation: useCreateContact
  } satisfies ModuleFormConfigItem<ContactData, ContactFormProps>,
  {
    key: 'companiesTable',
    label: 'Företagstabell',
    type: 'table',
    useData: useCompanies,
    props: { columns: companyColumns }
  } satisfies ModuleTableConfigItem<CompanyData, DataTableProps<CompanyData>>,
  {
    key: 'assignmentsTable',
    label: 'Uppdragstabell',
    type: 'table',
    useData: useAssignments,
    props: { columns: assignmentColumns }
  } satisfies ModuleTableConfigItem<AssignmentData, DataTableProps<AssignmentData>>,
  {
    key: 'contactsTable',
    label: 'Kontaktpersonstabell',
    type: 'table',
    useData: useContacts,
    props: { columns: contactColumns }
  } satisfies ModuleTableConfigItem<ContactData, DataTableProps<ContactData>>
] as ModuleConfigItem<AnyData>[];
