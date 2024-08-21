// material-ui
import { Button } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
import { Company } from '../api/companiesApi';
import CompanyForm from '../components/CompanyForm';
import { companyColumns } from '../config/CompanyConfig';
import { useCreateCompany, useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompanies } from '../hooks/useCompaniesQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| COMPANIES PAGE ||============================== //

const CompaniesPage = () => {
  const { data = [], isLoading } = useCompanies();
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  return (
    <FlexGrow>
      <DataTable<Company>
        data={data}
        columns={companyColumns}
        getRowId={(row) => `${row.companyId}`}
        state={{ isLoading }}
        onCreate={(row) => createCompany(row)}
        onUpdate={(row) => updateCompany(row)}
        onDelete={(row) => deleteCompany(row)}
        renderTopToolbarCustomActions={({ table }) => (
          <Button
            onClick={() => table.setCreatingRow(true)}
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till bolag
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <SebraDialog
            table={table}
            row={row}
            titles={{ creating: 'Lägg till bolag', editing: 'Redigera bolag' }}
            FormComponent={CompanyForm}
          />
        )}
      />
    </FlexGrow>
  );
};

export default CompaniesPage;
