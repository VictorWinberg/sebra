import { useState } from 'react';

// material-ui
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';

// project imports
import Bookmark from '../components/Bookmark';
import ModuleForm, { ModuleFormConfig } from '../components/ModuleForm';
import ModuleTable, { ModuleTableConfig } from '../components/ModuleTable';

type ModuleConfig = ModuleTableConfig & ModuleFormConfig;
type ModuleKey = keyof ModuleConfig;
type ModuleConfigItem = { [K in ModuleKey]: { type: ModuleConfig[K]['type']; key: K; label: string } }[ModuleKey];

const modules: ModuleConfigItem[] = [
  { type: 'form', key: 'companyForm', label: 'Företagsformulär' },
  { type: 'form', key: 'assignmentForm', label: 'Uppdragsformulär' },
  { type: 'form', key: 'contactForm', label: 'Kontaktpersonsformulär' },
  { type: 'table', key: 'companiesTable', label: 'Företagstabell' },
  { type: 'table', key: 'assignmentsTable', label: 'Uppdragstabell' },
  { type: 'table', key: 'contactsTable', label: 'Kontaktpersonstabell' }
];

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleConfigItem>();

  const handleModuleChange = (event: SelectChangeEvent<string>) => {
    const module = modules.find((module) => module.key === event.target.value);
    setSelectedModule(module);
  };

  return (
    <Box>
      <Bookmark />

      <FormControl variant="outlined" fullWidth sx={{ my: 2 }}>
        <InputLabel>Välj modul</InputLabel>
        <Select value={selectedModule?.key ?? ''} onChange={handleModuleChange} label="Välj modul">
          {modules.map((module) => (
            <MenuItem key={module.key} value={module.key}>
              {module.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedModule?.type === 'table' && <ModuleTable moduleType={selectedModule.key} />}
      {selectedModule?.type === 'form' && <ModuleForm moduleType={selectedModule.key} />}
    </Box>
  );
};

export default Modules;
