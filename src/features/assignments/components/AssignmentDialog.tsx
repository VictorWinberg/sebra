// material-ui
import { Box, Button, CircularProgress, DialogContent, DialogTitle } from '@mui/material';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';

// project imports
import useDialogActions from '@/hooks/useDialogActions';
import { Assignment } from '../api/assignmentsApi';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT DIALOG ||============================== //

interface AssignmentDialogProps {
  table: MRT_TableInstance<Assignment>;
  row: MRT_Row<Assignment>;
}

const AssignmentDialog = ({ table, row }: AssignmentDialogProps) => {
  const { creatingRow, isSaving, values, setValues, handleCancel, handleSubmit } = useDialogActions(table, row);

  return (
    <>
      <DialogTitle variant="h4" color="primary">
        {creatingRow ? 'Lägg till uppdrag' : 'Redigera uppdrag'}
      </DialogTitle>
      <DialogContent>
        <AssignmentForm
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

export default AssignmentDialog;
