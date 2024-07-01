import { useEffect, useState, useRef } from 'react';

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

const DocumentForm = ({ onSubmit = () => { }, onChange, formProps, children, ...rest }: DocumentFormProps) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<Partial<FileDocument>>(formProps);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const iframeWindow = iframeRef.current.contentWindow;
      const iframeDocument = iframeWindow.document;
      const contentHeight = iframeDocument.documentElement.scrollHeight;
      const contentWidth = iframeDocument.documentElement.scrollWidth;

      const iframeHeight = iframeRef.current.clientHeight;
      const iframeWidth = iframeRef.current.clientWidth;

      const scaleX = iframeWidth / contentWidth;
      const scaleY = iframeHeight / contentHeight;
      const scale = Math.min(scaleX, scaleY);

      iframeDocument.body.style.transform = `scale(${scale})`;
      iframeDocument.body.style.transformOrigin = 'top left';
      iframeDocument.body.style.width = `${contentWidth}px`;
      iframeDocument.body.style.height = `${contentHeight}px`;
    }
  };

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
              <Box
                component="iframe"
                ref={iframeRef}
                src={previewUrl}
                title="PDF Preview"
                onLoad={handleIframeLoad}
                style={{
                  width: '100%',
                  height: '500px',
                  border: 'none'
                }}
              />
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
