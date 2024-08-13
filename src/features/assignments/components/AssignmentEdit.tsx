import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack, Typography } from '@mui/material';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import { Contact } from '@/features/contacts/api/contactsApi';
import DocumentReferenceTable from '@/features/documents/components/DocumentReferenceTable';
import { useDocumentReferences } from '@/features/documents/hooks/useDocumentsQueries';
import InteractionTable from '@/features/interactions/components/InteractionTable';
import { useInteractions } from '@/features/interactions/hooks/useInteractionsQueries';
import { headerHeight } from '@/store/constant';
import ContentTabs from '@/ui-component/ContentTabs';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { formatDate } from '@/utils';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignment } from '../hooks/useAssignmentsQueries';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT EDIT PAGE ||============================== //

const AssignmentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: assignment, isLoading } = useAssignment(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  const { data: documentReferences = [], isLoading: documentsIsLoading } = useDocumentReferences({
    entityType: 'assignment',
    entityId: assignment?.assignmentId
  });
  const { data: interactions = [], isLoading: interactionsIsLoading } = useInteractions(
    assignment ? { contactId: assignment.responsiblePersonId } : undefined
  );

  const handleSubmit = (data: Partial<Assignment>) => {
    if (assignment) {
      updateAssignment(data);
    } else {
      createAssignment(data, {
        onSuccess: (res) => navigate(`/home/assignments/${res.assignmentId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <AssignmentForm
      formProps={{ values: assignment }}
      onSubmit={handleSubmit}
      renderTopContent={() => (
        <Box sx={{ position: 'relative', mt: 1, mb: 3 }}>
          <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: 0 }}>
            {assignment && (
              <DeleteConfirm onClick={() => deleteAssignment(assignment, { onSuccess: () => navigate('..') })}>
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
            {assignment ? 'Redigera uppdrag' : 'Lägg till uppdrag'}
          </Typography>
        </Box>
      )}
      renderBottomContent={() =>
        assignment && (
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
                      defaultValues={{
                        contacts: [assignment.responsiblePerson, assignment.externalContactPerson].filter(
                          (contact) => !!contact
                        ) as Contact[],
                        interactionDate: formatDate()
                      }}
                    />
                  )
                },
                {
                  id: 'documents',
                  label: 'Dokument',
                  content: (
                    <DocumentReferenceTable
                      documentReferences={documentReferences}
                      isLoading={documentsIsLoading}
                      defaultValues={{ entityId: assignment.assignmentId, entityType: 'assignment' }}
                    />
                  )
                },
                { id: 'stakeholders', label: 'Intressenter', content: <>Intressenter...</> },
                { id: 'modules', label: 'Moduler', content: <>Moduler...</> }
              ]}
            />
          </FlexGrow>
        )
      }
    />
  );
};

export default AssignmentEdit;
