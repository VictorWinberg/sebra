import { useEffect } from 'react';

// material-ui
import { Autocomplete, BoxProps, Grid, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { Contact } from '../api/contactsApi';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';

// ==============================|| CONTACT FORM ||============================== //

export interface ContactFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Contact) => void;
  onChange?: (data: Contact) => void;
  formProps?: UseFormProps<Contact>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

const ContactForm = ({
  onSubmit = () => {},
  onChange,
  formProps,
  renderTopContent,
  renderBottomContent,
  ...rest
}: ContactFormProps) => {
  const { data: companies = [] } = useCompanies();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Contact>(formProps);

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
              label="Namn"
              type="text"
              margin="none"
              {...register('contactName', { required: true })}
              error={!!errors.contactName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" type="text" margin="none" {...register('email')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Telefonnummer" type="text" margin="none" {...register('phone')} />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Befattning" type="text" margin="none" {...register('jobTitle')} />
          </Grid>
        </Grid>

        {renderBottomContent?.()}
      </form>
    </FlexGrow>
  );
};

export default ContactForm;
