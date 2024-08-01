import { useState } from 'react';

// material-ui
import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';

// project imports
import Bookmark from '../components/ModuleBookmark';
import Module from '../components/Module';
import { AnyData, ModuleConfigItem, modules } from '../config/ModuleConfig';

const ModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleConfigItem<AnyData> | undefined>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return modules.find((module) => module.key === searchParams.get('module'));
  });
  const [title, setTitle] = useState<string | undefined>(selectedModule?.label);

  const handleModuleChange = (event: SelectChangeEvent<string>) => {
    const module = modules.find((module) => module.key === event.target.value);
    setSelectedModule(module);
    setTitle(module?.label);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs>
          <FormControl variant="outlined" fullWidth sx={{ my: 2 }}>
            <InputLabel>Välj modul</InputLabel>
            <Select value={selectedModule?.key ?? ''} onChange={handleModuleChange} label="Välj modul">
              <MenuItem value="">
                <em>Välj modul</em>
              </MenuItem>
              {modules.map((module) => (
                <MenuItem key={module.key} value={module.key}>
                  {module.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ alignContent: 'center', textAlign: 'center' }}>
          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Bookmark label={selectedModule?.label} disabled={!selectedModule} />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Titel"
            value={title ?? ''}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Module title={title ?? null} selectedModule={selectedModule ?? null} />
    </Box>
  );
};

export default ModulesPage;
