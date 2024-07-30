// material-ui
import { Box, Button } from '@mui/material';

// third-party
import { UseMutationResult } from '@tanstack/react-query';

// project imports
import { Assignment } from '@/features/assignments/api/assignmentsApi';
import AssignmentForm from '@/features/assignments/components/AssignmentForm';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { Company } from '@/features/companies/api/companiesApi';
import CompanyForm from '@/features/companies/components/CompanyForm';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { Contact } from '@/features/contacts/api/contactsApi';
import ContactForm from '@/features/contacts/components/ContactForm';
import { useCreateContact } from '@/features/contacts/hooks/useContactsMutations';

const MODULE_FORM_CONFIG: ModuleFormConfig = {
  companyForm: { type: 'form', FormComponent: CompanyForm, createMutation: useCreateCompany },
  assignmentForm: { type: 'form', FormComponent: AssignmentForm, createMutation: useCreateAssignment },
  contactForm: { type: 'form', FormComponent: ContactForm, createMutation: useCreateContact }
};

interface FormMapping {
  companyForm: { model: Company; props: React.ComponentProps<typeof CompanyForm> };
  assignmentForm: { model: Assignment; props: React.ComponentProps<typeof AssignmentForm> };
  contactForm: { model: Contact; props: React.ComponentProps<typeof ContactForm> };
}

export type ModuleFormConfig = { [K in keyof FormMapping]: ModuleFormConfigItem<K> };

type ModuleFormConfigItem<T extends keyof FormMapping> = {
  type: 'form';
  FormComponent: React.ComponentType<FormMapping[T]['props']>;
  createMutation: () => UseMutationResult<FormMapping[T]['model'], Error, Partial<FormMapping[T]['model']>, unknown>;
};

type ModuleFormProps<T extends keyof FormMapping> = {
  moduleType: T;
};

const ModuleForm = <T extends keyof FormMapping>({ moduleType }: ModuleFormProps<T>) => {
  const { FormComponent, createMutation } = MODULE_FORM_CONFIG[moduleType];
  const { mutate } = createMutation();

  return (
    <FormComponent onSubmit={mutate}>
      <Box sx={{ my: 1 }} />
      <Button size="large" type="submit" variant="contained" color="primary">
        Spara
      </Button>
    </FormComponent>
  );
};

export default ModuleForm;
