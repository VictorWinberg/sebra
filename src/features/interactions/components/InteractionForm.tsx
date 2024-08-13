import { useEffect } from 'react';

// material-ui
import { Autocomplete, BoxProps, Chip, Grid, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

// third party
import dayjs from 'dayjs';
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { Interaction } from '../api/interactionsApi';
import { formatDate } from '@/utils';

// assets

// ==============================|| INTERACTIONS FORM ||============================== //
interface InteractionFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Interaction) => void;
  onChange?: (data: Partial<Interaction>) => void;
  formProps?: UseFormProps<Interaction>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

const InteractionForm = ({
  onSubmit = () => {},
  onChange,
  formProps,
  renderTopContent,
  renderBottomContent,
  ...rest
}: InteractionFormProps) => {
  const { data: contacts = [] } = useContacts();

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors }
  } = useForm<Interaction>(formProps);

  const fields = watch();
  useEffect(() => {
    onChange?.(fields);
  }, [onChange, fields]);

  return (
    <FlexGrow {...rest}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        {renderTopContent?.()}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Typ av interaktion"
                  type="text"
                  margin="none"
                  {...register('interactionType', { required: true })}
                  error={!!errors.interactionType}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  minRows={4}
                  label="Noteringar"
                  type="text"
                  margin="none"
                  {...register('notes')}
                  error={!!errors.notes}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="interactionDate"
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <DateTimePicker
                        label="Interaktionsdatum"
                        value={dayjs(field.value)}
                        inputRef={field.ref}
                        onChange={(date) => field.onChange(formatDate(date))}
                      />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="contacts"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      id="multiple-contacts"
                      options={contacts}
                      getOptionKey={(option) => option.contactId}
                      getOptionLabel={(option) => option.contactName}
                      isOptionEqualToValue={(option, value) => option.contactId === value.contactId}
                      value={field.value}
                      onChange={(_, value) => field.onChange(value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kontakter"
                          variant="outlined"
                          fullWidth
                          error={!!errors.contacts}
                        />
                      )}
                      renderTags={(tags, getTagProps) => {
                        return tags.map((option, index) => (
                          <Chip {...getTagProps({ index })} key={option.contactId} label={option.contactName} />
                        ));
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {renderBottomContent?.()}
      </form>
    </FlexGrow>
  );
};

export default InteractionForm;
