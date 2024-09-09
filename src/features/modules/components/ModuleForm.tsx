// material-ui
import { Button } from '@mui/material';

// third-party
import { UseMutationResult } from '@tanstack/react-query';

// project imports
import { FormProps } from '@/ui-component/SebraForm';
import { AnyData, ModuleBaseConfigItem } from '../config/ModuleConfig';

export interface ModuleFormConfigItem<M extends AnyData> extends ModuleBaseConfigItem {
  type: 'form';
  FormComponent: React.FC<FormProps<M>>;
  createMutation: () => UseMutationResult<unknown, Error, { data: Omit<M, 'id'> }, unknown>;
  props: FormProps<M>;
  configProps?: FormProps<M>;
}

type ModuleFormProps<M extends AnyData> = {
  selectedModule: ModuleFormConfigItem<M>;
};

const ModuleForm = <M extends AnyData>({ selectedModule }: ModuleFormProps<M>) => {
  const { FormComponent, createMutation, props } = selectedModule;
  const { mutate } = createMutation();

  return (
    <FormComponent
      onSubmit={(data) => mutate({ data })}
      {...props}
      renderBottomContent={() => (
        <Button size="large" type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Skapa
        </Button>
      )}
    />
  );
};

export default ModuleForm;
