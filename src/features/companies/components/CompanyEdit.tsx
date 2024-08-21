import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack, Typography } from '@mui/material';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import AssignmentTable from '@/features/assignments/components/AssignmentTable';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import ContactTable from '@/features/contacts/components/ContactTable';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { headerHeight } from '@/store/constant';
import ContentTabs from '@/ui-component/ContentTabs';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Company } from '../api/companiesApi';
import { useCreateCompany, useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompany } from '../hooks/useCompaniesQueries';
import CompanyForm from './CompanyForm';
import { useMemo } from 'react';

// ==============================|| COMPANY EDIT PAGE ||============================== //

const CompanyEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: company, isLoading } = useCompany(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { data: allAssignments = [], isLoading: assignmentsIsLoading } = useAssignments();
  const assignments = useMemo(
    () => allAssignments.filter((assignment) => assignment.companyId === company?.companyId),
    [allAssignments, company]
  );

  const handleSubmit = (data: Partial<Company>) => {
    if (company) {
      updateCompany(data);
    } else {
      createCompany(data, {
        onSuccess: (res) => navigate(`/home/companies/${res.companyId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <CompanyForm
        formProps={{ values: company }}
        onSubmit={handleSubmit}
        renderTopContent={() => (
          <Box sx={{ position: 'relative', mt: 1, mb: 3 }}>
            <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: 0 }}>
              {company && (
                <DeleteConfirm onClick={() => deleteCompany(company, { onSuccess: () => navigate('..') })}>
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
              {company ? 'Redigera bolag' : 'Lägg till bolag'}
            </Typography>
          </Box>
        )}
        renderBottomContent={() =>
          company && (
            <FlexGrow sx={{ mt: 1, minHeight: `calc(100vh - ${headerHeight}px - 1rem)` }}>
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
                        assignments={assignments}
                        isLoading={assignmentsIsLoading}
                        defaultValues={{ companyId: company.companyId }}
                      />
                    )
                  },
                  { id: 'kyc', label: 'KYC', content: <>KYC...</> }
                ]}
              />
            </FlexGrow>
          )
        }
      />
    </>
  );
};

export default CompanyEdit;
