import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import { useFile, useSaveFile, useUpdateFile } from '@/hooks/useFiles';
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { FileDocument } from '@/utils';
import DocumentForm from './DocumentForm';

// ==============================|| DOCUMENT EDIT PAGE ||============================== //

const DocumentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: document, isLoading } = useFile(params.id === 'new' ? undefined : params.id);
  const { mutate: saveFile } = useSaveFile();
  const { mutate: updateFile } = useUpdateFile();

  const handleSubmit = (data: Partial<FileDocument>) => {
    if (document) {
      updateFile(data);
    } else {
      saveFile(data, {
        onSuccess: (res) => navigate(`/documents/${res}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {document ? 'Redigera dokument' : 'Lägg till dokument'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <DocumentForm formProps={{ values: document }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        {document && (
          <FlexGrow>
            <ContentTabs tabs={[{ label: 'Referenser', content: <>Referenser...</> }]} />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
        </Stack>
      </DocumentForm>
    </>
  );
};

export default DocumentEdit;
