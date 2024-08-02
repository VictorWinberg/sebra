import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import { Assignment, AssignmentData } from '../api/assignmentsApi';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import AssignmentForm from './AssignmentForm';

interface AssignmentTableProps {
  assignments: AssignmentData[];
  isLoading: boolean;
  defaultValues?: Partial<Assignment>;
}

const AssignmentTable = ({ assignments, isLoading, defaultValues }: AssignmentTableProps) => {
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  return (
    <DataTable
      data={assignments}
      getRowId={(row) => `${row.assignmentId}`}
      state={{ isLoading }}
      columns={[
        {
          accessorKey: 'assignmentName',
          header: 'Uppdrag',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/dashboard/assignments/${row.original.assignmentId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        {
          accessorFn: (row) => row.responsiblePerson?.contactName,
          header: 'Ansvarig',
          enableEditing: false,
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/dashboard/contacts/${row.original.responsiblePersonId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        {
          accessorFn: (row) => row.externalContactPerson?.contactName,
          header: 'Extern',
          enableEditing: false,
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/dashboard/contacts/${row.original.externalContactPersonId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorKey: 'status', header: 'Status' },
        {
          accessorKey: 'fee',
          header: 'Arvode',
          Cell: ({ cell }) =>
            cell.getValue<number>().toLocaleString('sv-SE', {
              style: 'currency',
              currency: 'SEK',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
        }
      ]}
      renderCreateRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            Nytt uppdrag
          </DialogTitle>
          <DialogContent>
            <AssignmentForm
              sx={{ mt: 1 }}
              formProps={{ defaultValues }}
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
      renderEditRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            Redigera uppdrag
          </DialogTitle>
          <DialogContent>
            <AssignmentForm
              sx={{ mt: 1 }}
              formProps={{ defaultValues: row.original }}
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
      onCreate={(row) => createAssignment(row)}
      onUpdate={(row) => updateAssignment(row)}
      onDelete={(row) => deleteAssignment(row)}
    />
  );
};

export default AssignmentTable;
