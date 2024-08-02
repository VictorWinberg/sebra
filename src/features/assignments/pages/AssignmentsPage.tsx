import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import AssignmentForm from '../components/AssignmentForm';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignments } from '../hooks/useAssignmentsQueries';
import { assignmentColumns, AssignmentData } from '../config/AssignmentConfig';

// assets
import AddIcon from '@mui/icons-material/Add';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

const AssignmentsPage = () => {
  const { data = [], isLoading } = useAssignments();
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  return (
    <FlexGrow>
      <DataTable<AssignmentData>
        data={data}
        columns={assignmentColumns}
        getRowId={(row) => `${row.assignmentId}`}
        state={{ isLoading }}
        onCreate={(row) => createAssignment(row)}
        onUpdate={(row) => updateAssignment(row)}
        onDelete={(row) => deleteAssignment(row)}
        renderTopToolbarCustomActions={() => (
          <Button
            component={RouterLink}
            to="new"
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till uppdrag
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera uppdrag
            </DialogTitle>
            <DialogContent>
              <AssignmentForm
                sx={{ mt: 1 }}
                formProps={{ values: row.original }}
                onChange={(values) => {
                  //@ts-expect-error any
                  row._valuesCache = values;
                }}
              />
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons row={row} table={table} variant="text" />
            </DialogActions>
          </>
        )}
      />
    </FlexGrow>
  );
};

export default AssignmentsPage;
