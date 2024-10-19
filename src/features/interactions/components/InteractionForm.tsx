// material-ui
import { Autocomplete, Chip, Grid, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

// third party
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

// project imports
import { Interaction } from '@/api/gql/graphql';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import SebraForm, { FormProps } from '@/ui-component/SebraForm';
import { formatDate } from '@/utils';

// ==============================|| INTERACTIONS FORM ||============================== //

const InteractionForm = ({ formProps, ...props }: FormProps<Interaction>) => {
  const { data: contacts = [] } = useContacts();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Interaction>(formProps);

  return (
    <SebraForm {...props} handleSubmit={handleSubmit}>
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
                    disableCloseOnSelect
                    id="multiple-contacts"
                    options={contacts}
                    getOptionKey={(option) => option.id}
                    getOptionLabel={(option) => option.contactName}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={field.value || []}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Kontakter" variant="outlined" fullWidth error={!!errors.contacts} />
                    )}
                    renderTags={(tags, getTagProps) => {
                      return tags.map((option, index) => (
                        <Chip {...getTagProps({ index })} key={option.id} label={option.contactName} />
                      ));
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default InteractionForm;
