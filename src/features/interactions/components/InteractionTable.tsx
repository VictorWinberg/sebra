import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Avatar, Chip, DialogActions, DialogContent, DialogTitle, List, ListItem } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Contact } from '@/features/contacts/api/contactsApi';
import DataTable from '@/ui-component/DataTable';
import { formatDate, stringAvatar, toLocalTime } from '@/utils';
import { Interaction } from '../api/interactionsApi';
import {
  useCreateInteraction,
  useCreateInteractionContacts,
  useDeleteInteraction,
  useUpdateInteraction,
  useUpdateInteractionContacts
} from '../hooks/useInteractionsMutations';
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
  const { mutate: createInteractionContacts } = useCreateInteractionContacts();
  const { mutate: updateInteractionContacts } = useUpdateInteractionContacts();

  return (
    <DataTable
      data={interactions}
      getRowId={(row) => row.interactionId}
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
                <ListItem key={contact.contactId} sx={{ py: 0.5 }} disableGutters>
                  <Chip
                    component={RouterLink}
                    variant="outlined"
                    avatar={<Avatar {...stringAvatar(contact.contactName)} />}
                    label={contact.contactName}
                    to={`/dashboard/contacts/${contact.contactId}`}
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
      renderCreateRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            Ny interaktion
          </DialogTitle>
          <DialogContent>
            <InteractionForm
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
            Redigera interaktion
          </DialogTitle>
          <DialogContent>
            <InteractionForm
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
      onCreate={(row) => [
        createInteraction(row, {
          onSuccess: ({ interactionId }) => {
            createInteractionContacts({ ...row, interactionId });
          }
        })
      ]}
      onUpdate={(row) => [updateInteraction(row), updateInteractionContacts(row)]}
      onDelete={(row) => [deleteInteraction(row)]}
    />
  );
};

export default InteractionTable;
