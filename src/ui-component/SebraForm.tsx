// material-ui
import { BoxProps } from '@mui/material';

// third party
import { UseFormHandleSubmit, UseFormProps } from 'react-hook-form';

// project imports
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';

// ==============================|| SEBRA FORM ||============================== //

export interface FormProps<T extends Record<string, unknown>> extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: T) => void;
  formProps?: UseFormProps<T>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

interface SebraFormProps<T extends Record<string, unknown>> extends Omit<FormProps<T>, 'formProps'> {
  handleSubmit: UseFormHandleSubmit<T, undefined>;
}

const SebraForm = <T extends Record<string, unknown>>({
  handleSubmit,
  onSubmit = () => {},
  renderTopContent,
  renderBottomContent,
  children,
  ...props
}: SebraFormProps<T>) => {
  return (
    <FlexGrow {...props}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        {renderTopContent?.()}
        {children}
        {renderBottomContent?.()}
      </form>
    </FlexGrow>
  );
};

export default SebraForm;
