import { Company } from '@/api/gql/graphql';
import { Assignment } from '@/features/assignments/api/assignmentsApi';
import AssignmentForm from '@/features/assignments/components/AssignmentForm';
import { assignmentColumns } from '@/features/assignments/config/AssignmentConfig';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import CompanyForm from '@/features/companies/components/CompanyForm';
import { companyColumns } from '@/features/companies/config/CompanyConfig';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { Contact, ContactRecord } from '@/features/contacts/api/contactsApi';
import ContactForm from '@/features/contacts/components/ContactForm';
import { contactColumns } from '@/features/contacts/config/ContactConfig';
import { useCreateContact } from '@/features/contacts/hooks/useContactsMutations';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { ModuleFormConfigItem } from '../components/ModuleForm';
import { ModuleTableConfigItem } from '../components/ModuleTable';

export type AnyData = Record<string, unknown>;

export interface ModuleBaseConfigItem {
  key: string;
  label: string;
  title: string;
}

type ModuleFormConfig<M extends AnyData> = ModuleFormConfigItem<M>;
type ModuleTableConfig<M extends AnyData> = ModuleTableConfigItem<M>;
export type ModuleConfigItem<M extends AnyData> = ModuleFormConfig<M> | ModuleTableConfig<M>;

export const modules: ModuleConfigItem<AnyData>[] = [
  {
    key: 'companyForm',
    label: 'Formulär - Bolag',
    title: 'Nytt bolag',
    type: 'form',
    FormComponent: CompanyForm,
    createMutation: useCreateCompany,
    props: {}
  } satisfies ModuleFormConfigItem<Company>,
  {
    key: 'assignmentForm',
    label: 'Formulär - Uppdrag',
    title: 'Nytt uppdrag',
    type: 'form',
    FormComponent: AssignmentForm,
    createMutation: useCreateAssignment,
    props: {}
  } satisfies ModuleFormConfigItem<Assignment>,
  {
    key: 'contactForm',
    label: 'Formulär - Kontaktperson',
    title: 'Ny kontaktperson',
    type: 'form',
    FormComponent: ContactForm,
    createMutation: useCreateContact,
    props: {}
  } satisfies ModuleFormConfigItem<ContactRecord>,
  {
    key: 'companiesTable',
    label: 'Tabell - Bolag',
    title: 'Bolag',
    type: 'table',
    useData: useCompanies,
    props: { columns: companyColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Company>,
  {
    key: 'assignmentsTable',
    label: 'Tabell - Uppdrag',
    title: 'Uppdrag',
    type: 'table',
    useData: useAssignments,
    props: { columns: assignmentColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Assignment>,
  {
    key: 'contactsTable',
    label: 'Tabell - Kontaktperson',
    title: 'Kontakter',
    type: 'table',
    useData: useContacts,
    props: { columns: contactColumns },
    configProps: { enableTopToolbar: true, enableColumnFilters: true }
  } satisfies ModuleTableConfigItem<Contact>
] as ModuleConfigItem<AnyData>[];
