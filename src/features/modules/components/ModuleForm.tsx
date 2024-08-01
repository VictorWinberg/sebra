// material-ui
import { Box, Button } from '@mui/material';

// third-party
import { UseMutationResult } from '@tanstack/react-query';

// project imports
import { AnyData, ModuleBaseConfigItem } from '../config/ModuleConfig';

export interface ModuleFormConfigItem<M extends AnyData, P> extends ModuleBaseConfigItem {
  type: 'form';
  FormComponent: React.FC<FormProps<M>>;
  createMutation: () => UseMutationResult<M, Error, Partial<M>, unknown>;
  props: P;
  configProps?: P;
}

type FormProps<M> = {
  onSubmit: (data: Partial<M>) => void;
  children?: React.ReactNode;
};

type ModuleFormProps<M extends AnyData, P> = {
  selectedModule: ModuleFormConfigItem<M, P>;
};

const ModuleForm = <M extends AnyData, P>({ selectedModule }: ModuleFormProps<M, P>) => {
  const { FormComponent, createMutation, props } = selectedModule;
  const { mutate } = createMutation();

  return (
    <FormComponent onSubmit={mutate} {...props}>
      <Box sx={{ my: 1 }} />
      <Button size="large" type="submit" variant="contained" color="primary">
        Spara
      </Button>
    </FormComponent>
  );
};

export default ModuleForm;
