import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// material-ui
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import FileSelector from '@/ui-component/FileSelecter';
import Preview from '@/ui-component/Preview';
import SebraForm, { FormProps } from '@/ui-component/SebraForm';
import { DocumentContent } from '@/utils';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import { CloudDownload } from '@mui/icons-material';

// ==============================|| DOCUMENT FORM ||============================== //

const DocumentForm = ({ formProps, ...rest }: FormProps<DocumentContent>) => {
  const location = useLocation();
  const enableExistingDocuments = !location.pathname.startsWith('/documents');

  const { data: documents = [] } = useDocuments();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<DocumentContent>(formProps);

  const fields = watch();

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
    <SebraForm {...rest} handleSubmit={handleSubmit}>
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
        <Grid item xs={12}>
          {enableExistingDocuments && (
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
                    <TextField {...params} label="Välj existerande dokument" variant="outlined" fullWidth />
                  )}
                />
              )}
            />
          )}
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default DocumentForm;
