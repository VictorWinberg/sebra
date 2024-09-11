// material-ui
import { Autocomplete, Grid, TextField } from '@mui/material';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import SebraForm, { FormProps } from '@/ui-component/SebraForm';
import { Lead, LEAD_STAGES } from '../api/leadsApi';

// ==============================|| LEADS FORM ||============================== //

const LeadForm = ({ formProps, ...props }: FormProps<Lead>) => {
  const { data: contacts = [] } = useContacts();
  const { data: companies = [] } = useCompanies();
  const { data: assignments = [] } = useAssignments();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Lead>(formProps);

  return (
    <SebraForm {...props} handleSubmit={handleSubmit}>
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
                renderInput={(params) => (
                  <TextField {...params} label="Fas" variant="outlined" fullWidth error={!!errors.stage} />
                )}
              />
            )}
            rules={{ required: true }}
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
                getOptionKey={(option) => option.id}
                getOptionLabel={(option) => option.contactName}
                value={contacts.find((contact) => contact.id === field.value) || null}
                onChange={(_, value) => field.onChange(value ?? undefined)}
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
                getOptionKey={(option) => option.id}
                getOptionLabel={(option) => option.companyName}
                value={companies.find((contact) => contact.id === field.value) || null}
                onChange={(_, value) => field.onChange(value ?? undefined)}
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
                getOptionKey={(option) => option.id}
                getOptionLabel={(option) => option.assignmentName}
                value={assignments.find((contact) => contact.id === field.value) || null}
                onChange={(_, value) => field.onChange(value ?? undefined)}
                renderInput={(params) => <TextField {...params} label="Uppdrag" variant="outlined" fullWidth />}
              />
            )}
          />
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default LeadForm;
