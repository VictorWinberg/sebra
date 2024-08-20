import { useEffect, useMemo } from 'react';

// material-ui
import { Autocomplete, BoxProps, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { DocumentReference } from '../api/documentsApi';

const ENTITY_TYPES = [
  { label: 'Bolag', value: 'company' },
  { label: 'Kontakt', value: 'contact' },
  { label: 'Uppdrag', value: 'assignment' }
];

// ==============================|| DOCUMENT FORM ||============================== //
interface DocumentReferenceFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: DocumentReference) => void;
  onChange?: (data: DocumentReference) => void;
  formProps?: UseFormProps<DocumentReference>;
  renderTopContent?: () => React.ReactNode;
  renderBottomContent?: () => React.ReactNode;
}

const DocumentReferenceForm = ({
  onSubmit = () => {},
  onChange,
  formProps,
  renderTopContent,
  renderBottomContent,
  ...rest
}: DocumentReferenceFormProps) => {
  const { data: contacts = [] } = useContacts();
  const { data: assignments = [] } = useAssignments();
  const { data: companies = [] } = useCompanies();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<DocumentReference>(formProps);

  const fields = watch();
  useEffect(() => {
    onChange?.(fields);
  }, [onChange, fields]);

  const entityOptions = useMemo(() => {
    switch (fields.entityType) {
      case 'company':
        return companies.map((company) => ({ id: company.companyId, label: company.companyName }));
      case 'contact':
        return contacts.map((contact) => ({ id: contact.contactId, label: contact.contactName }));
      case 'assignment':
        return assignments.map((assignment) => ({
          id: assignment.assignmentId,
          label: assignment.assignmentName
        }));
      default:
        return [];
    }
  }, [fields.entityType, companies, contacts, assignments]);

  return (
    <FlexGrow {...rest}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        {renderTopContent?.()}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" error={!!errors.entityType}>
              <InputLabel>Typ</InputLabel>
              <Controller
                control={control}
                name="entityType"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select label="Typ" {...field}>
                    <MenuItem value="" disabled>
                      Välj typ
                    </MenuItem>
                    {ENTITY_TYPES.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="entityId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Autocomplete
                  options={entityOptions}
                  getOptionKey={(option) => option.id}
                  getOptionLabel={(option) => option.label}
                  value={entityOptions.find((entity) => entity.id === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.id : undefined)}
                  renderInput={(params) => <TextField {...params} label="Länk" variant="outlined" fullWidth />}
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

export default DocumentReferenceForm;
