import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack, Typography } from '@mui/material';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import AssignmentTable from '@/features/assignments/components/AssignmentTable';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import InteractionTable from '@/features/interactions/components/InteractionTable';
import { useInteractions } from '@/features/interactions/hooks/useInteractionsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { formatDate } from '@/utils';
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

  const handleSubmit = (data: Partial<Contact>) => {
    if (contact) {
      updateContact(data);
    } else {
      createContact(data, {
        onSuccess: (res) => navigate(`/home/contacts/${res.contactId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <ContactForm
      formProps={{ values: contact }}
      onSubmit={handleSubmit}
      renderTopContent={() => (
        <Box sx={{ position: 'relative', mt: 1, mb: 3 }}>
          <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: 0 }}>
            {contact && (
              <DeleteConfirm onClick={() => deleteContact(contact, { onSuccess: () => navigate('..') })}>
                {(popupState) => (
                  <Button variant="outlined" color="error" {...bindTrigger(popupState)}>
                    Ta bort
                  </Button>
                )}
              </DeleteConfirm>
            )}
            <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
              Avbryt
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Spara
            </Button>
          </Stack>

          <Typography variant="h4" color="primary">
            {contact ? 'Redigera kontakt' : 'Lägg till kontakt'}
          </Typography>
        </Box>
      )}
      renderBottomContent={() =>
        contact && (
          <FlexGrow>
            <ContentTabs
              tabs={[
                {
                  id: 'interactions',
                  label: 'Interaktioner',
                  content: (
                    <InteractionTable
                      interactions={interactions}
                      isLoading={interactionsIsLoading}
                      defaultValues={{ contacts: [contact], interactionDate: formatDate() }}
                    />
                  )
                },
                { id: 'seeking', label: 'Söker', content: <>Söker...</> },
                {
                  id: 'assignments',
                  label: 'Uppdrag',
                  content: (
                    <AssignmentTable
                      assignments={assignments.filter(
                        (assignment) =>
                          assignment.externalContactPersonId === contact.contactId ||
                          assignment.responsiblePersonId === contact.contactId
                      )}
                      isLoading={assignmentsIsLoading}
                    />
                  )
                }
              ]}
            />
          </FlexGrow>
        )
      }
    />
  );
};

export default ContactEdit;
