// material-ui
import { Grid, TextField } from '@mui/material';

// third party
import { useForm } from 'react-hook-form';

// project imports
import SebraForm, { FormProps } from '@/ui-component/SebraForm';
import { Company } from '@/api/gql/graphql';

// ==============================|| COMPANY FORM ||============================== //

const CompanyForm = ({ formProps, ...props }: FormProps<Company>) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Company>(formProps);

  return (
    <SebraForm {...props} handleSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bolagsnamn"
            type="text"
            margin="none"
            {...register('companyName', { required: true })}
            error={!!errors.companyName}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Address" type="text" margin="none" {...register('address')} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Industri" type="text" margin="none" {...register('industry')} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Website" type="text" margin="none" {...register('website')} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Telefon" type="text" margin="none" {...register('phone')} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Email" type="text" margin="none" {...register('email')} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Org.nr" type="text" margin="none" {...register('organizationNumber')} />
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default CompanyForm;
