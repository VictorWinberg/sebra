import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// material-ui
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import { Media } from '@/api/gql/graphql';
import FileSelector from '@/ui-component/FileSelecter';
import Preview from '@/ui-component/Preview';
import SebraForm, { FormProps } from '@/ui-component/SebraForm';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import { CloudDownload } from '@mui/icons-material';

// ==============================|| DOCUMENT FORM ||============================== //

const DocumentForm = ({ formProps, ...rest }: FormProps<Media & { upload?: File }>) => {
  const location = useLocation();
  const { workspace } = useParams();
  const enableExistingDocuments = !location.pathname.startsWith(`/${workspace}/documents`);

  const { data: documents = [] } = useDocuments();

  const { control, handleSubmit, watch, setValue } = useForm<Media & { upload?: File }>(formProps);
  const fields = watch();

  const handleFileChange = (data: File) => {
    setValue('upload', data);
    setValue('alt', data.name);
  };

  useEffect(() => {
    if (fields.id) {
      const document = documents.find((doc) => doc.id === fields.id);
      if (document) {
        setValue('upload', undefined);
        setValue('alt', document.alt);
      }
    } else {
      setValue('upload', undefined);
      setValue('alt', '');
    }
  }, [fields.id, setValue, documents]);

  return (
    <SebraForm {...rest} handleSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="alt"
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
            <Grid item xs={12}>
              <Stack spacing={2} direction="row">
                {!fields.createdAt && (
                  <FileSelector onChange={handleFileChange} disabled={!!fields.id}>
                    Välj dokument
                  </FileSelector>
                )}
                <Button
                  startIcon={<CloudDownload />}
                  variant="contained"
                  href={fields.url || '#'}
                  download={fields.alt}
                  disabled={!fields.url}
                >
                  Ladda ner
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              {!fields.url && enableExistingDocuments && (
                <Controller
                  name="id"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      options={documents}
                      getOptionKey={(option) => option.id}
                      getOptionLabel={(option) => option.alt || ''}
                      value={documents.find((document) => document.id === field.value) || null}
                      onChange={(_, value) => field.onChange(value ? value.id : undefined)}
                      renderInput={(params) => (
                        <TextField {...params} label="Välj existerande dokument" variant="outlined" fullWidth />
                      )}
                    />
                  )}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Preview url={fields.url} mimeType={fields.mimeType} />
        </Grid>
      </Grid>
    </SebraForm>
  );
};

export default DocumentForm;
