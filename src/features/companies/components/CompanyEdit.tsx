import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import { useCreateContact, useDeleteContact, useUpdateContact } from '@/features/contacts/hooks/useContactsMutations';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Company } from '../api/companiesApi';
import { useCreateCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompany } from '../hooks/useCompaniesQueries';
import CompanyForm from './CompanyForm';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';

// ==============================|| COMPANY EDIT PAGE ||============================== //

const CompanyEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: company, isLoading } = useCompany(Number(params.id));
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();

  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { data: assignments = [], isLoading: assignmentsIsLoading } = useAssignments();
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

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
                { label: 'Interaktioner', content: <>Interaktioner...</> },
                {
                  label: 'Kontakter',
                  content: (
                    <DataTable
                      data={contacts.filter((contact) => contact.companyId === company.companyId)}
                      getRowId={(row) => `${row.contactId}`}
                      state={{ isLoading: contactsIsLoading }}
                      columns={[
                        {
                          accessorKey: 'contactName',
                          header: 'Namn',
                          Cell: ({ cell, row }) => (
                            <Link component={RouterLink} to={`/dashboard/contacts/${row.original.contactId}`}>
                              {cell.getValue<string>()}
                            </Link>
                          )
                        },
                        { accessorKey: 'email', header: 'Email' },
                        { accessorKey: 'jobTitle', header: 'Jobbtitel' },
                        { accessorKey: 'phone', header: 'Telefonnummer' }
                      ]}
                      onCreate={(row) => createContact({ ...row, companyId: company.companyId })}
                      onUpdate={(row) => updateContact(row)}
                      onDelete={(row) => deleteContact(row)}
                    />
                  )
                },
                { label: 'Söker', content: <>Söker...</> },
                {
                  label: 'Uppdrag',
                  content: (
                    <DataTable
                      data={assignments.filter(
                        (assignment) => assignment.externalContactPerson?.companyId === company.companyId
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
                },
                { label: 'KYC', content: <>KYC...</> }
              ]}
              selected={1}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
        </Stack>
      </CompanyForm>
    </>
  );
};

export default CompanyEdit;
