import { Assignment } from '@/features/assignments/api/assignmentsApi';
import AssignmentForm from '@/features/assignments/components/AssignmentForm';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { Company } from '@/features/companies/api/companiesApi';
import CompanyForm from '@/features/companies/components/CompanyForm';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { Box, Button } from '@mui/material';
import { UseMutationResult } from '@tanstack/react-query';

interface TypeMapping {
  company: { type: Company; props: React.ComponentProps<typeof CompanyForm> };
  assignment: { type: Assignment; props: React.ComponentProps<typeof AssignmentForm> };
}

const MODULE_FORM_CONFIG: ModuleFormConfig = {
  company: {
    FormComponent: CompanyForm,
    createMutation: useCreateCompany
  },
  assignment: {
    FormComponent: AssignmentForm,
    createMutation: useCreateAssignment
  }
};

type ModuleFormConfig = { [K in keyof TypeMapping]: ModuleFormConfigItem<K> };
type ModuleFormConfigItem<T extends keyof TypeMapping> = {
  FormComponent: React.ComponentType<TypeMapping[T]['props']>;
  createMutation: () => UseMutationResult<TypeMapping[T]['type'], Error, Partial<TypeMapping[T]['type']>, unknown>;
};

type ModuleFormProps<T extends keyof TypeMapping> = {
  moduleType: T;
};

const ModuleForm = <T extends keyof TypeMapping>({ moduleType }: ModuleFormProps<T>) => {
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
