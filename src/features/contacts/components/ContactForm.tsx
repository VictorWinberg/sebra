// material-ui
import { Autocomplete, Grid, TextField } from '@mui/material';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import { Contact } from '@/api/gql/graphql';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import SebraForm, { FormProps } from '@/ui-component/SebraForm';

// ==============================|| CONTACT FORM ||============================== //

const ContactForm = ({ formProps, ...props }: FormProps<Contact>) => {
  const { data: companies = [] } = useCompanies();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Contact>(formProps);

  return (
    <SebraForm {...props} handleSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Namn"
            type="text"
            margin="none"
            {...register('contactName', { required: true })}
            error={!!errors.contactName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="none"
            {...register('email', { required: true })}
            error={!!errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Telefonnummer" type="text" margin="none" {...register('phone')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <Autocomplete
                options={companies}
                getOptionKey={(option) => option.id}
                getOptionLabel={(option) => option.companyName}
                value={companies.find((company) => company.id === field.value?.id) || null}
                onChange={(_, value) => field.onChange(value ?? undefined)}
                renderInput={(params) => <TextField {...params} label="Bolag" variant="outlined" fullWidth />}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Befattning" type="text" margin="none" {...register('jobTitle')} />
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default ContactForm;
