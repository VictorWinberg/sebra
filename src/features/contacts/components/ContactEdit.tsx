import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import {
  Avatar,
  Box,
  Button,
  Chip,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  List,
  ListItem,
  Stack
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { MRT_EditActionButtons } from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import InteractionForm from '@/features/interactions/components/InteractionForm';
import {
  useCreateInteraction,
  useCreateInteractionContacts,
  useDeleteInteraction,
  useUpdateInteraction,
  useUpdateInteractionContacts
} from '@/features/interactions/hooks/useInteractionsMutations';
import { useInteractions } from '@/features/interactions/hooks/useInteractionsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { formatDate, stringAvatar, toLocalTime } from '@/utils';
import { Contact } from '../api/contactsApi';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContact } from '../hooks/useContactsQueries';
import ContactForm from './ContactForm';

// ==============================|| CONTACT EDIT PAGE ||============================== //

const ContactEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: contact, isLoading } = useContact(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  const { data: assignments = [], isLoading: assignmentsIsLoading } = useAssignments();

  const { data: interactions = [], isLoading: interactionsIsLoading } = useInteractions(
    contact ? { contactId: contact.contactId } : undefined
  );

  const { mutate: createInteraction } = useCreateInteraction();
  const { mutate: updateInteraction } = useUpdateInteraction();
  const { mutate: deleteInteraction } = useDeleteInteraction();
  const { mutate: createInteractionContacts } = useCreateInteractionContacts();
  const { mutate: updateInteractionContacts } = useUpdateInteractionContacts();

  const handleSubmit = (data: Partial<Contact>) => {
    if (contact) {
      updateContact(data);
    } else {
      createContact(data, {
        onSuccess: (res) => navigate(`/dashboard/contact/${res.contactId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {contact ? 'Redigera kontakt' : 'Lägg till kontakt'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <ContactForm formProps={{ values: contact }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        {contact && (
          <FlexGrow>
            <ContentTabs
              tabs={[
                {
                  id: 'interactions',
                  label: 'Interaktioner',
                  content: (
                    <DataTable
                      data={interactions}
                      getRowId={(row) => row.interactionId}
                      state={{ isLoading: interactionsIsLoading }}
                      columns={[
                        {
                          accessorKey: 'interactionType',
                          header: 'Typ',
                          filterVariant: 'multi-select'
                        },
                        {
                          accessorKey: 'contacts',
                          header: 'Kontakter',
                          minSize: 100,
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
                              formProps={{
                                defaultValues: {
                                  contacts: [contact],
                                  interactionDate: formatDate()
                                }
                              }}
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
                  )
                },
                { id: 'seeking', label: 'Söker', content: <>Söker...</> },
                {
                  id: 'assignments',
                  label: 'Uppdrag',
                  content: (
                    <DataTable
                      data={assignments.filter(
                        (assignment) =>
                          assignment.externalContactPersonId === contact.contactId ||
                          assignment.responsiblePersonId === contact.contactId
                      )}
                      getRowId={(row) => `${row.assignmentId}`}
                      state={{ isLoading: assignmentsIsLoading }}
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
                            <Link
                              component={RouterLink}
                              to={`/dashboard/contacts/${row.original.externalContactPersonId}`}
                            >
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
                    />
                  )
                }
              ]}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 'auto' }}>
          {contact && (
            <DeleteConfirm onClick={() => deleteContact(contact, { onSuccess: () => navigate('..') })}>
              {(popupState) => (
                <Button size="large" variant="outlined" color="error" {...bindTrigger(popupState)}>
                  Ta bort
                </Button>
              )}
            </DeleteConfirm>
          )}
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Avbryt
          </Button>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
        </Stack>
      </ContactForm>
    </>
  );
};

export default ContactEdit;
