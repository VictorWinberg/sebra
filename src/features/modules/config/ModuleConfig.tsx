import { Assignment, AssignmentRecord } from '@/features/assignments/api/assignmentsApi';
import AssignmentForm, { AssignmentFormProps } from '@/features/assignments/components/AssignmentForm';
import { assignmentColumns } from '@/features/assignments/config/AssignmentConfig';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { Company } from '@/features/companies/api/companiesApi';
import CompanyForm, { CompanyFormProps } from '@/features/companies/components/CompanyForm';
import { companyColumns } from '@/features/companies/config/CompanyConfig';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { Contact, ContactRecord } from '@/features/contacts/api/contactsApi';
import ContactForm, { ContactFormProps } from '@/features/contacts/components/ContactForm';
import { contactColumns } from '@/features/contacts/config/ContactConfig';
import { useCreateContact } from '@/features/contacts/hooks/useContactsMutations';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { DataTableProps } from '@/hooks/useDataTable';
import { ModuleFormConfigItem } from '../components/ModuleForm';
import { ModuleTableConfigItem } from '../components/ModuleTable';

export type AnyData = object;
export type AnyProps = object;

export interface ModuleBaseConfigItem {
  key: string;
  label: string;
  title: string;
}

type ModuleFormConfig<M extends AnyData, P> = ModuleFormConfigItem<M, P>;
type ModuleTableConfig<M extends AnyData> = ModuleTableConfigItem<M, DataTableProps<M>>;
export type ModuleConfigItem<M extends AnyData, P extends AnyProps> = ModuleFormConfig<M, P> | ModuleTableConfig<M>;

export const modules: ModuleConfigItem<AnyData, AnyProps>[] = [
  {
    key: 'companyForm',
    label: 'Formulär - Bolag',
    title: 'Nytt bolag',
    type: 'form',
    FormComponent: CompanyForm,
    createMutation: useCreateCompany,
    props: {}
  } satisfies ModuleFormConfigItem<Company, CompanyFormProps>,
  {
    key: 'assignmentForm',
    label: 'Formulär - Uppdrag',
    title: 'Nytt uppdrag',
    type: 'form',
    FormComponent: AssignmentForm,
    createMutation: useCreateAssignment,
    props: {}
  } satisfies ModuleFormConfigItem<AssignmentRecord, AssignmentFormProps>,
  {
    key: 'contactForm',
    label: 'Formulär - Kontaktperson',
    title: 'Ny kontaktperson',
    type: 'form',
    FormComponent: ContactForm,
    createMutation: useCreateContact,
    props: {}
  } satisfies ModuleFormConfigItem<ContactRecord, ContactFormProps>,
  {
    key: 'companiesTable',
    label: 'Tabell - Bolag',
    title: 'Bolag',
    type: 'table',
    useData: useCompanies,
    props: { columns: companyColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Company, DataTableProps<Company>>,
  {
    key: 'assignmentsTable',
    label: 'Tabell - Uppdrag',
    title: 'Uppdrag',
    type: 'table',
    useData: useAssignments,
    props: { columns: assignmentColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Assignment, DataTableProps<Assignment>>,
  {
    key: 'contactsTable',
    label: 'Tabell - Kontaktperson',
    title: 'Kontakter',
    type: 'table',
    useData: useContacts,
    props: { columns: contactColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Contact, DataTableProps<Contact>>
] as ModuleConfigItem<AnyData, AnyProps>[];
