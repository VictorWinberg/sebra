// material-ui
import { BoxProps, Button, IconButton, Stack, SxProps, useMediaQuery, useTheme } from '@mui/material';

// third party
import { UseFormHandleSubmit, UseFormProps } from 'react-hook-form';

// project imports
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { bindTrigger } from 'material-ui-popup-state';
import DeleteConfirm from './DeleteConfirm';

// assets
import { Cancel, Delete, Save } from '@mui/icons-material';

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

interface FormActionButtonsProps {
  sx?: SxProps;
  onDelete?: () => void;
  onCancel?: () => void;
}

export const FormActionButtons = ({ sx, ...props }: FormActionButtonsProps) => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const variant = matchUpSm ? 'text' : 'icon';

  return (
    <Stack spacing={2} direction="row" sx={sx}>
      {props.onDelete && (
        <DeleteConfirm onClick={props.onDelete}>
          {(popupState) =>
            variant === 'icon' ? (
              <IconButton color="error" size="small" {...bindTrigger(popupState)}>
                <Delete fontSize="small" />
              </IconButton>
            ) : (
              <Button variant="outlined" color="error" {...bindTrigger(popupState)}>
                Ta bort
              </Button>
            )
          }
        </DeleteConfirm>
      )}
      {props.onCancel &&
        (variant === 'icon' ? (
          <IconButton color="primary" size="small" onClick={props.onCancel}>
            <Cancel fontSize="small" />
          </IconButton>
        ) : (
          <Button variant="outlined" color="primary" onClick={props.onCancel}>
            Avbryt
          </Button>
        ))}
      {variant === 'icon' ? (
        <IconButton type="submit" color="primary" size="small">
          <Save fontSize="small" />
        </IconButton>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Spara
        </Button>
      )}
    </Stack>
  );
};

export default SebraForm;
