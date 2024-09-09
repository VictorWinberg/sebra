import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Typography } from '@mui/material';

// project imports
import AssignmentTable from '@/features/assignments/components/AssignmentTable';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import ContactTable from '@/features/contacts/components/ContactTable';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { headerHeight } from '@/store/constant';
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { FormActionButtons } from '@/ui-component/SebraForm';
import { useMemo } from 'react';
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
            <Typography variant="h4" color="primary">
              {company ? 'Redigera bolag' : 'Lägg till bolag'}
            </Typography>

            <FormActionButtons
              sx={{ position: 'absolute', top: 0, right: 0 }}
              onDelete={company ? () => deleteCompany(company, { onSuccess: () => navigate('..') }) : undefined}
              onCancel={() => navigate(-1)}
            />
          </Box>
        )}
        renderBottomContent={() =>
          company && (
            <FlexGrow sx={{ mt: 1, minHeight: `calc(100vh - ${headerHeight}px - 1rem)` }}>
              <ContentTabs
                tabs={[
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
                  }
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
