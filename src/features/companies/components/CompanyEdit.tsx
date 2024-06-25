import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Company } from '../api/companiesApi';
import { useCreateCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompany } from '../hooks/useCompaniesQueries';
import CompanyForm from './CompanyForm';

// ==============================|| COMPANY EDIT PAGE ||============================== //

const CompanyEdit = () => {
  const params = useParams();
  const { data: company, isLoading } = useCompany(Number(params.id));
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Company>) => {
    if (company) {
      updateCompany(data);
    } else {
      createCompany(data, {
        onSuccess: () => navigate('..')
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

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Kontakter', content: <>Kontakter...</> },
              { label: 'Söker', content: <>Söker...</> },
              { label: 'Uppdrag', content: <>Uppdrag...</> },
              { label: 'KYC', content: <>KYC...</> }
            ]}
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
      </CompanyForm>
    </>
  );
};

export default CompanyEdit;
