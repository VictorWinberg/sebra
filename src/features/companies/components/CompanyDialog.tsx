// material-ui
import { Box, Button, CircularProgress, DialogContent, DialogTitle } from '@mui/material';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';

// project imports
import useDialogActions from '@/hooks/useDialogActions';
import { Company } from '../api/companiesApi';
import CompanyForm from './CompanyForm';

// ==============================|| ASSIGNMENT DIALOG ||============================== //

interface CompanyDialogProps {
  table: MRT_TableInstance<Company>;
  row: MRT_Row<Company>;
}

const CompanyDialog = ({ table, row }: CompanyDialogProps) => {
  const { creatingRow, isSaving, values, setValues, handleCancel, handleSubmit } = useDialogActions(table, row);

  return (
    <>
      <DialogTitle variant="h4" color="primary">
        {creatingRow ? 'Lägg till bolag' : 'Redigera bolag'}
      </DialogTitle>
      <DialogContent>
        <CompanyForm
          sx={{ mt: 1 }}
          formProps={{ values }}
          onChange={setValues}
          onSubmit={handleSubmit}
          renderBottomContent={() => (
            <Box sx={{ mt: 3, ml: 'auto' }}>
              <Button onClick={handleCancel} sx={{ minWidth: '100px' }}>
                Avbryt
              </Button>
              <Button disabled={isSaving} type="submit" sx={{ minWidth: '100px' }} variant="contained">
                {isSaving && <CircularProgress color="inherit" size={18} />}
                Spara
              </Button>
            </Box>
          )}
        />
      </DialogContent>
    </>
  );
};

export default CompanyDialog;
