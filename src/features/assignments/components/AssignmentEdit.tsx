import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Typography } from '@mui/material';

// project imports
import { Assignment } from '@/api/gql/graphql';
import DocumentReferenceTable from '@/features/documents/components/DocumentReferenceTable';
import InteractionTable from '@/features/interactions/components/InteractionTable';
import { useInteractions } from '@/features/interactions/hooks/useInteractionsQueries';
import { headerHeight } from '@/store/constant';
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { FormActionButtons } from '@/ui-component/SebraForm';
import { formatDate, intersection } from '@/utils';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignment } from '../hooks/useAssignmentsQueries';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT EDIT PAGE ||============================== //

const AssignmentEdit = () => {
  const { id, workspace } = useParams();
  const navigate = useNavigate();

  const { data: assignment, isLoading } = useAssignment(id === 'new' ? undefined : id);
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  const { data: allInteractions = [], isLoading: interactionsIsLoading } = useInteractions();
  const interactions = useMemo(
    () =>
      allInteractions.filter(
        (interaction) =>
          intersection(interaction.contacts || [], assignment?.responsibleContacts || [], 'id').length > 0
      ),
    [allInteractions, assignment]
  );

  const handleSubmit = (data: Assignment) => {
    if (assignment) {
      updateAssignment({ ...data, id: assignment.id });
    } else {
      createAssignment(data, {
        onSuccess: ({ createAssignment }) => navigate(`/${workspace}/home/assignments/${createAssignment?.id || ''}`)
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
          <Typography variant="h4" color="primary">
            {assignment ? 'Redigera uppdrag' : 'Lägg till uppdrag'}
          </Typography>

          <FormActionButtons
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onDelete={assignment ? () => deleteAssignment(assignment, { onSuccess: () => navigate('..') }) : undefined}
            onCancel={() => navigate(-1)}
          />
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
                        contacts: [...(assignment.responsibleContacts || []), assignment.externalContact].filter(
                          (c) => !!c
                        ),
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
                      defaultValues={{ entityId: assignment.id, entityType: 'assignment' }}
                      where={{ entityId: { equals: assignment.id }, entityType: { equals: 'assignment' } }}
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

export default AssignmentEdit;
