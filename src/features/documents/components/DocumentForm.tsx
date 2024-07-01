import { useEffect } from 'react';

// material-ui
import { BoxProps, Button, Grid, Stack, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import FileSelector from '@/ui-component/FileSelecter';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { FileDocument } from '@/utils';

// assets
import { CloudDownload } from '@mui/icons-material';

// ==============================|| DOCUMENT FORM ||============================== //
interface DocumentFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Partial<FileDocument>) => void;
  onChange?: (data: Partial<FileDocument>) => void;
  formProps?: UseFormProps<Partial<FileDocument>>;
}

const DocumentForm = ({ onSubmit = () => {}, onChange, formProps, children, ...rest }: DocumentFormProps) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<Partial<FileDocument>>(formProps);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fields = watch();
  useEffect(() => {
    onChange?.(fields);
  }, [onChange, fields]);

  const handleFileChange = (data: File) => {
    setValue('documentName', data.name);
    setValue('content', data);
    setPreviewUrl(URL.createObjectURL(data));
  };

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
                  label="Fil"
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
            {previewUrl && (
              <Box mt={2}>
                <iframe
                  src={previewUrl}
                  title="Preview"
                  style={{ width: '100%', height: '500px' }}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <FileSelector onChange={handleFileChange}>{fields.content ? 'Ersätt fil' : 'Välj fil'}</FileSelector>
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
