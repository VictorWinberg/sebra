import { useEffect } from 'react';

// material-ui
import { Autocomplete, BoxProps, Chip, Grid, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { Assignment } from '../api/assignmentsApi';
import { useAssignmentStatuses } from '../hooks/useAssignmentsQueries';

// ==============================|| ASSIGNMENT FORM ||============================== //

export interface AssignmentFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Assignment) => void;
  onChange?: (data: Assignment) => void;
  formProps?: UseFormProps<Assignment>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

const AssignmentForm = ({
  onSubmit = () => {},
  onChange,
  formProps,
  renderTopContent,
  renderBottomContent,
  ...rest
}: AssignmentFormProps) => {
  const { data: assignmentStatuses = [] } = useAssignmentStatuses();
  const { data: contacts = [] } = useContacts();
  const { data: companies = [] } = useCompanies();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Assignment>(formProps);

  const fields = watch();
  useEffect(() => {
    onChange?.(fields);
  }, [onChange, fields]);

  return (
    <FlexGrow {...rest}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        {renderTopContent?.()}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Uppdragsnamn"
              type="text"
              margin="none"
              {...register('assignmentName', { required: true })}
              error={!!errors.assignmentName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  freeSolo
                  options={assignmentStatuses}
                  value={assignmentStatuses.find((status) => status === field.value) || null}
                  onChange={(_, value) => field.onChange(value ?? '')}
                  renderInput={(params) => <TextField {...params} label="Status" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Typ" margin="none" type="text" {...register('type')} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Arvode"
              margin="none"
              type="number"
              {...register('fee')}
              InputProps={{ endAdornment: 'SEK' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="responsibleContacts"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  limitTags={2}
                  disableCloseOnSelect
                  id="multiple-contacts"
                  options={contacts}
                  getOptionKey={(option) => option.contactId}
                  getOptionLabel={(option) => option.contactName}
                  isOptionEqualToValue={(option, value) => option.contactId === value.contactId}
                  value={field.value || []}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Ansvariga kontakter"
                      variant="outlined"
                      fullWidth
                      error={!!errors.responsibleContacts}
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
          <Grid item xs={12} sm={4}>
            <Controller
              name="externalContactId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={contacts}
                  getOptionKey={(option) => option.contactId}
                  getOptionLabel={(option) => option.contactName}
                  value={contacts.find((contact) => contact.contactId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.contactId : undefined)}
                  renderInput={(params) => (
                    <TextField {...params} label="Extern kontakt" variant="outlined" fullWidth />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={companies}
                  getOptionKey={(option) => option.companyId}
                  getOptionLabel={(option) => option.companyName}
                  value={companies.find((company) => company.companyId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.companyId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Bolag" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
        </Grid>

        {renderBottomContent?.()}
      </form>
    </FlexGrow>
  );
};

export default AssignmentForm;
