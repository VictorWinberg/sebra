import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Avatar, Chip, List, ListItem } from '@mui/material';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Contact, Interaction } from '@/api/gql/graphql';
import DataTable from '@/ui-component/DataTable';
import SebraDialog from '@/ui-component/SebraDialog';
import { formatDate, stringAvatar, toLocalTime } from '@/utils';
import { useCreateInteraction, useDeleteInteraction, useUpdateInteraction } from '../hooks/useInteractionsMutations';
import InteractionForm from './InteractionForm';

interface InteractionTableProps {
  interactions: Interaction[];
  isLoading: boolean;
  defaultValues: Partial<Interaction>;
}

const InteractionTable = ({ interactions, isLoading, defaultValues }: InteractionTableProps) => {
  const { mutate: createInteraction } = useCreateInteraction();
  const { mutate: updateInteraction } = useUpdateInteraction();
  const { mutate: deleteInteraction } = useDeleteInteraction();

  return (
    <DataTable
      data={interactions}
      getRowId={(row) => row.id}
      state={{ isLoading }}
      columns={[
        {
          accessorKey: 'interactionType',
          header: 'Typ',
          filterVariant: 'multi-select'
        },
        {
          accessorKey: 'contacts',
          header: 'Kontakter',
          minSize: 150,
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
          accessorKey: 'notes',
          header: 'Noteringar'
        },
        {
          accessorFn: (row) => dayjs(row.interactionDate),
          header: 'Interaktionsdatum',
          filterVariant: 'date-range',
          enableEditing: false,
          Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
        }
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <SebraDialog
          table={table}
          row={row}
          titles={{ creating: 'Ny interaktion', editing: 'Redigera interaktion' }}
          FormComponent={InteractionForm}
          defaultValues={defaultValues}
        />
      )}
      onCreate={(row) => createInteraction(row)}
      onUpdate={(row) => updateInteraction(row)}
      onDelete={(row) => deleteInteraction(row)}
    />
  );
};

export default InteractionTable;
