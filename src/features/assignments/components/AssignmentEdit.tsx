import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignment } from '../hooks/useAssignmentsQueries';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT EDIT PAGE ||============================== //

const AssignmentEdit = () => {
  const params = useParams();
  const { data: assignment, isLoading } = useAssignment(Number(params.id));
  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Assignment>) => {
    if (assignment) {
      updateAssignment(data);
    } else {
      createAssignment(data, {
        onSuccess: () => navigate('..')
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {assignment ? 'Redigera uppdrag' : 'Lägg till uppdrag'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <AssignmentForm formProps={{ values: assignment }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Dokument', content: <>Dokument...</> },
              {
                label: 'Intressenter',
                content: (
                  <DataTable
                    data={contacts}
                    getRowId={(row) => `${row.contactId}`}
                    state={{ isLoading: contactsIsLoading }}
                    columns={[
                      { accessorKey: 'contactName', header: 'Namn' },
                      { accessorKey: 'companyName', header: 'Bolag' }
                    ]}
                  />
                )
              },
              { label: 'Moduler', content: <>Moduler...</> }
            ]}
            selected={2}
          />
        </FlexGrow>

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
        </Stack>
      </AssignmentForm>
    </>
  );
};

export default AssignmentEdit;
