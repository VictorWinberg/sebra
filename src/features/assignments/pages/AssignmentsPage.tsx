// material-ui
import { Button } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '../../../ui-component/SebraDialog';
import { Assignment } from '../api/assignmentsApi';
import AssignmentForm from '../components/AssignmentForm';
import { assignmentColumns } from '../config/AssignmentConfig';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignments } from '../hooks/useAssignmentsQueries';

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
      <DataTable<Assignment>
        data={data}
        columns={assignmentColumns}
        getRowId={(row) => `${row.assignmentId}`}
        state={{ isLoading }}
        onCreate={(row) => createAssignment(row)}
        onUpdate={(row) => updateAssignment(row)}
        onDelete={(row) => deleteAssignment(row)}
        renderTopToolbarCustomActions={({ table }) => (
          <Button
            onClick={() => table.setCreatingRow(true)}
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till uppdrag
          </Button>
        )}
        renderEditRowDialogContent={({ table, row }) => (
          <SebraDialog
            FormComponent={AssignmentForm}
            table={table}
            row={row}
            titles={{ creating: 'Lägg till uppdrag', editing: 'Redigera uppdrag' }}
          />
        )}
      />
    </FlexGrow>
  );
};

export default AssignmentsPage;
