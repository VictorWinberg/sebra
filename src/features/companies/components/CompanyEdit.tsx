import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import AssignmentTable from '@/features/assignments/components/AssignmentTable';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import ContactTable from '@/features/contacts/components/ContactTable';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Company } from '../api/companiesApi';
import { useCreateCompany, useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompany } from '../hooks/useCompaniesQueries';
import CompanyForm from './CompanyForm';

// ==============================|| COMPANY EDIT PAGE ||============================== //

const CompanyEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: company, isLoading } = useCompany(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { data: assignments = [], isLoading: assignmentsIsLoading } = useAssignments();

  const handleSubmit = (data: Partial<Company>) => {
    if (company) {
      updateCompany(data);
    } else {
      createCompany(data, {
        onSuccess: (res) => navigate(`/dashboard/companies/${res.companyId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {company ? 'Redigera företag' : 'Lägg till företag'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <CompanyForm formProps={{ values: company }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        {company && (
          <FlexGrow>
            <ContentTabs
              tabs={[
                { id: 'interactions', label: 'Interaktioner', content: <>Interaktioner...</> },
                {
                  id: 'contacts',
                  label: 'Kontakter',
                  content: (
                    <ContactTable
                      contacts={contacts.filter((contact) => contact.companyId === company.companyId)}
                      isLoading={contactsIsLoading}
                      defaultValues={{ companyId: company.companyId }}
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
                        (assignment) => assignment.externalContactPerson?.companyId === company.companyId
                      )}
                      isLoading={assignmentsIsLoading}
                    />
                  )
                },
                { id: 'kyc', label: 'KYC', content: <>KYC...</> }
              ]}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 'auto' }}>
          {company && (
            <DeleteConfirm onClick={() => deleteCompany(company, { onSuccess: () => navigate('..') })}>
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
      </CompanyForm>
    </>
  );
};

export default CompanyEdit;
