import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { MaterialReactTable, MRT_TableInstance } from 'material-react-table';

// project imports
import AssignmentForm from '@/features/assignments/components/AssignmentForm';
import { useCreateAssignment } from '@/features/assignments/hooks/useAssignmentsMutations';
import { Company } from '@/features/companies/api/companiesApi';
import CompanyForm from '@/features/companies/components/CompanyForm';
import { useCreateCompany } from '@/features/companies/hooks/useCompaniesMutations';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { columns as companyColumns } from '@/features/companies/pages/CompaniesPage';
import { useDataTable } from '@/hooks/useDataTable';
import { FilterParam, useQueryParam } from '@/hooks/useQueryParam';
import Bookmark from '../components/Bookmark';
import { Assignment } from '@/features/assignments/api/assignmentsApi';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import ModuleTable from '../components/ModuleTable';
import ModuleForm from '../components/ModuleForm';

type FormModule<U extends string, T extends React.ComponentType> = { name: U; form: T; props: React.ComponentProps<T> };
type TableModule<U extends string, T extends Record<string, unknown>> = { name: U; table: MRT_TableInstance<T> };

type Module = { name: string; form?: boolean; table?: boolean };

// type Module =
//   | FormModule<'company', typeof CompanyForm>
//   | FormModule<'assignment', typeof AssignmentForm>
//   | TableModule<'companies', Company>
//   | TableModule<'assignments', Assignment>;

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<Module>();

  const components: Module[] = [
    { name: 'company', form: true },
    { name: 'assignment', form: true },
    { name: 'companies', table: true },
    { name: 'assignments', table: true }
  ];

  const handleModuleChange = (event: SelectChangeEvent<string>) => {
    const module = components.find((module) => module.name === event.target.value);
    setSelectedModule(module);
  };

  return (
    <Box>
      <Bookmark />

      <FormControl variant="outlined" fullWidth sx={{ my: 2 }}>
        <InputLabel>Välj modul</InputLabel>
        <Select value={selectedModule?.name ?? ''} onChange={handleModuleChange} label="Välj modul">
          <MenuItem value="company">Företagsformulär</MenuItem>
          <MenuItem value="assignment">Uppdragsformulär</MenuItem>
          <MenuItem value="companies">Företagstabell</MenuItem>
          <MenuItem value="assignments">Uppdragstabell</MenuItem>
        </Select>
      </FormControl>

      {selectedModule && 'table' in selectedModule && <ModuleTable moduleType={selectedModule.name} />}

      {selectedModule && 'form' in selectedModule && <ModuleForm moduleType={selectedModule.name} />}
    </Box>
  );
};

export default Modules;
