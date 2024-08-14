import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Avatar, Chip, DialogActions, DialogContent, DialogTitle, Link, List, ListItem } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import AssignmentForm from './AssignmentForm';
import { Contact } from '@/features/contacts/api/contactsApi';
import { stringAvatar } from '@/utils';

interface AssignmentTableProps {
  assignments: Assignment[];
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
            <Link component={RouterLink} to={`/home/assignments/${row.original.assignmentId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        {
          accessorKey: 'responsibleContacts',
          header: 'Ansvariga',
          enableEditing: false,
          Cell: ({ cell }) => (
            <List disablePadding>
              {cell.getValue<Contact[]>().map((contact) => (
                <ListItem key={contact.contactId} sx={{ py: 0.25 }} disableGutters>
                  <Chip
                    component={RouterLink}
                    variant="outlined"
                    avatar={<Avatar {...stringAvatar(contact.contactName)} />}
                    label={contact.contactName}
                    to={`/home/contacts/${contact.contactId}`}
                    clickable
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          )
        },
        {
          accessorFn: (row) => row.externalContact?.contactName,
          header: 'Extern',
          enableEditing: false,
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/home/contacts/${row.original.externalContactId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        {
          accessorFn: (row) => row.company?.companyName,
          header: 'Bolag',
          enableEditing: false,
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/home/companies/${row.original.companyId}`}>
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
      renderEditRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            {table.getState().creatingRow ? 'Ny referens' : 'Redigera referens'}
          </DialogTitle>
          <DialogContent>
            <AssignmentForm
              sx={{ mt: 1 }}
              formProps={{ defaultValues: { ...defaultValues, ...row.original } }}
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
