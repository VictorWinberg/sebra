import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { bindTrigger } from 'material-ui-popup-state';

// third party

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
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
                { label: 'Interaktioner', content: <>Interaktioner...</> },
                { label: 'Söker', content: <>Söker...</> },
                {
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
              selected={2}
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
