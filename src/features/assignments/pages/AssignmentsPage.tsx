import { Link as RouterLink, createSearchParams } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { formatDate, toLocalTime } from '@/utils';
import { fetchAssignments } from '../api/assignmentsApi';
import AssignmentForm from '../components/AssignmentForm';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignments } from '../hooks/useAssignmentsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

export type DataType = Awaited<ReturnType<typeof fetchAssignments>>[number];
export const columns: MRT_ColumnDef<DataType>[] = [
  {
    accessorKey: 'assignmentName',
    header: 'Uppdragsnamn',
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
      <Link
        component={RouterLink}
        to={{
          pathname: `/dashboard/contacts/${row.original.responsiblePersonId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
    accessorFn: (row) => row.externalContactPerson?.contactName,
    header: 'Extern',
    enableEditing: false,
    Cell: ({ cell, row }) => (
      <Link
        component={RouterLink}
        to={{
          pathname: `/dashboard/contacts/${row.original.externalContactPersonId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'type', header: 'Typ', filterVariant: 'multi-select' },
  { accessorKey: 'status', header: 'Status', filterVariant: 'multi-select' },
  {
    accessorKey: 'fee',
    header: 'Arvode',
    filterVariant: 'range-slider',
    Cell: ({ cell }) =>
      cell.getValue<number>().toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
  },
  {
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];

const AssignmentsPage = () => {
  const { data = [], isLoading } = useAssignments();
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  return (
    <FlexGrow>
      <DataTable<DataType>
        data={data}
        columns={columns}
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
            startIcon={<Add />}
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
