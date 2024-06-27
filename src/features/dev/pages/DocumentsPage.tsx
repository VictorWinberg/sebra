// material-ui
import Typography from '@mui/material/Typography';

// project imports
import FileUploader from '@/ui-component/FileUploader';

// ==============================|| DOCUMENTS PAGE ||============================== //

const DocumentsPage = () => (
  <>
    <Typography variant="h3" gutterBottom>
      Documents
    </Typography>
    <FileUploader />
  </>
);

export default DocumentsPage;
