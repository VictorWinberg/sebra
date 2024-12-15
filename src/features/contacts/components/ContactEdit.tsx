import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Typography } from '@mui/material';

// project imports
import { Contact } from '@/api/gql/graphql';
import AssignmentTable from '@/features/assignments/components/AssignmentTable';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import InteractionTable from '@/features/interactions/components/InteractionTable';
import { useInteractions } from '@/features/interactions/hooks/useInteractionsQueries';
import { headerHeight } from '@/store/constant';
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { FormActionButtons } from '@/ui-component/SebraForm';
import { formatDate } from '@/utils';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContact } from '../hooks/useContactsQueries';
import ContactForm from './ContactForm';

// ==============================|| CONTACT EDIT PAGE ||============================== //

const ContactEdit = () => {
  const { id, workspace } = useParams();
  const navigate = useNavigate();

  const { data: contact, isLoading } = useContact(id === 'new' ? undefined : id);
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  const { data: allAssignments = [], isLoading: assignmentsIsLoading } = useAssignments();
  const assignments = useMemo(
    () =>
      allAssignments.filter(
        (assignment) =>
          assignment.responsibleContacts?.some((c) => c.id === contact?.id) ||
          assignment.externalContact?.id === contact?.id
      ),
    [allAssignments, contact]
  );
  const { data: allInteractions = [], isLoading: interactionsIsLoading } = useInteractions();
  const interactions = useMemo(
    () => allInteractions.filter((interaction) => interaction.contacts?.some((c) => c.id === contact?.id)),
    [allInteractions, contact]
  );

  const handleSubmit = (data: Contact) => {
    if (contact) {
      updateContact({ ...data, id: contact.id });
    } else {
      createContact(data, {
        onSuccess: ({ createContact }) => navigate(`/${workspace}/home/contacts/${createContact?.id || ''}`)
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
          <Typography variant="h4" color="primary">
            {contact ? 'Redigera kontakt' : 'Lägg till kontakt'}
          </Typography>

          <FormActionButtons
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onDelete={contact ? () => deleteContact(contact, { onSuccess: () => navigate('..') }) : undefined}
            onCancel={() => navigate(-1)}
          />
        </Box>
      )}
      renderBottomContent={() =>
        contact && (
          <FlexGrow sx={{ mt: 1, minHeight: `calc(100vh - ${headerHeight}px - 1rem)` }}>
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
                {
                  id: 'assignments',
                  label: 'Uppdrag',
                  content: <AssignmentTable assignments={assignments} isLoading={assignmentsIsLoading} />
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
