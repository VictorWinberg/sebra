import { useEffect } from 'react';

// material-ui
import { Autocomplete, BoxProps, Button, Grid, Stack, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import FileSelector from '@/ui-component/FileSelecter';
import Preview from '@/ui-component/Preview';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { DocumentRecord } from '../api/documentsApi';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import { CloudDownload } from '@mui/icons-material';

// ==============================|| DOCUMENT FORM ||============================== //
interface DocumentFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: DocumentRecord) => void;
  onChange?: (data: Partial<DocumentRecord>) => void;
  formProps?: UseFormProps<DocumentRecord>;
}

const DocumentForm = ({ onSubmit = () => {}, onChange, formProps, children, ...rest }: DocumentFormProps) => {
  const { data: documents = [] } = useDocuments();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, defaultValues: { documentId } = {} }
  } = useForm<DocumentRecord>(formProps);

  const fields = watch();
  useEffect(() => {
    onChange?.(fields);
  }, [onChange, fields]);

  const handleFileChange = (data: File) => {
    setValue('documentName', data.name);
    setValue('content', data);
  };

  useEffect(() => {
    if (fields.documentId) {
      const document = documents.find((doc) => doc.documentId === fields.documentId);
      if (document) {
        setValue('documentName', document.documentName);
        setValue('content', document.content);
      }
    } else {
      setValue('documentName', '');
      setValue('content', undefined!);
    }
  }, [fields.documentId, setValue, documents]);

  return (
    <FlexGrow {...rest}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="documentName"
              rules={{ required: true }}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  label="Dokumentnamn"
                  type="text"
                  margin="none"
                  {...field}
                  error={!!fieldState.error}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="content"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Dokument"
                  type="text"
                  margin="none"
                  value={field.value?.name || ''}
                  disabled
                  error={!!errors.content}
                  InputProps={{ endAdornment: fields.content?.type }}
                />
              )}
            />
          </Grid>
          {!documentId && (
            <Grid item xs={12}>
              <Controller
                name="documentId"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={documents}
                    getOptionKey={(option) => option.documentId}
                    getOptionLabel={(option) => option.documentName}
                    value={documents.find((document) => document.documentId === field.value) || null}
                    onChange={(_, value) => field.onChange(value ? value.documentId : undefined)}
                    renderInput={(params) => (
                      <TextField {...params} label="Existerande dokument" variant="outlined" fullWidth />
                    )}
                  />
                )}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Preview file={fields.content} />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <FileSelector onChange={handleFileChange}>
                {fields.content ? 'Ersätt dokument' : 'Välj dokument'}
              </FileSelector>
              <Button
                startIcon={<CloudDownload />}
                variant="contained"
                href={fields.content ? URL.createObjectURL(fields.content) : '#'}
                download={fields.documentName}
                disabled={!fields.content}
              >
                Ladda ner
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {children}
      </form>
    </FlexGrow>
  );
};

export default DocumentForm;
