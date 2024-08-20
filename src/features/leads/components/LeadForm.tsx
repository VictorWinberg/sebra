import { useEffect } from 'react';

// material-ui
import { Autocomplete, BoxProps, Grid, TextField } from '@mui/material';

// third party
import { Controller, useForm, UseFormProps } from 'react-hook-form';

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { Lead, LEAD_STAGES } from '../api/leadsApi';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';

// ==============================|| LEADS FORM ||============================== //

interface LeadFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Lead) => void;
  onChange?: (data: Lead) => void;
  formProps?: UseFormProps<Lead>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

const LeadForm = ({
  onSubmit = () => {},
  onChange,
  formProps,
  renderTopContent,
  renderBottomContent,
  ...rest
}: LeadFormProps) => {
  const { data: contacts = [] } = useContacts();
  const { data: companies = [] } = useCompanies();
  const { data: assignments = [] } = useAssignments();

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors }
  } = useForm<Lead>(formProps);

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
            <TextField
              fullWidth
              label="Titel"
              type="text"
              margin="none"
              {...register('leadTitle', { required: true })}
              error={!!errors.leadTitle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="stage"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={LEAD_STAGES}
                  getOptionKey={(option) => option}
                  getOptionLabel={(option) => option}
                  value={field.value || null}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} label="Fas" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Beskrivning"
              type="text"
              multiline
              rows={4}
              {...register('description', { required: true })}
              error={!!errors.description}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="contactId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={contacts}
                  getOptionKey={(option) => option.contactId}
                  getOptionLabel={(option) => option.contactName}
                  value={contacts.find((contact) => contact.contactId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.contactId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Kontakt" variant="outlined" fullWidth />}
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
                  value={companies.find((contact) => contact.companyId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.companyId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Bolag" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="assignmentId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={assignments}
                  getOptionKey={(option) => option.assignmentId}
                  getOptionLabel={(option) => option.assignmentName}
                  value={assignments.find((contact) => contact.assignmentId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.assignmentId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Uppdrag" variant="outlined" fullWidth />}
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

export default LeadForm;
