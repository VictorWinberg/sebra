import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Avatar, Chip, Link, List, ListItem } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import SebraDialog from '@/ui-component/SebraDialog';
import { stringAvatar } from '@/utils';
import { Assignment } from '@/api/gql/graphql';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import AssignmentForm from './AssignmentForm';
import { Contact } from '@/api/gql/graphql';

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
      getRowId={(row) => `${row.id}`}
      state={{ isLoading }}
      columns={[
        {
          accessorKey: 'assignmentName',
          header: 'Uppdrag',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/home/assignments/${row.original.id}`}>
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
                <ListItem key={contact.id} sx={{ py: 0.25 }} disableGutters>
                  <Chip
                    component={RouterLink}
                    variant="outlined"
                    avatar={<Avatar {...stringAvatar(contact.contactName)} />}
                    label={contact.contactName}
                    to={`/home/contacts/${contact.id}`}
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
            <Link component={RouterLink} to={`/home/contacts/${row.original.externalContact?.id}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        {
          accessorFn: (row) => row.company?.companyName,
          header: 'Bolag',
          enableEditing: false,
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/home/companies/${row.original.company?.id}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorKey: 'status', header: 'Status' },
        {
          accessorKey: 'fee',
          header: 'Arvode',
          Cell: ({ cell }) =>
            cell.getValue<number>()?.toLocaleString('sv-SE', {
              style: 'currency',
              currency: 'SEK',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
        }
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <SebraDialog
          table={table}
          row={row}
          titles={{ creating: 'Lägg till uppdrag', editing: 'Redigera uppdrag' }}
          FormComponent={AssignmentForm}
          defaultValues={defaultValues}
        />
      )}
      onCreate={(row) => createAssignment(row)}
      onUpdate={(row) => updateAssignment(row)}
      onDelete={(row) => deleteAssignment(row)}
    />
  );
};

export default AssignmentTable;
