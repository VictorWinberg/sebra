import { useState } from 'react';

// material-ui
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';

// project imports
import Module from '../components/Module';
import Bookmark from '../components/ModuleBookmark';
import { AnyData, AnyProps, ModuleConfigItem, modules } from '../config/ModuleConfig';

const ModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleConfigItem<AnyData, AnyProps> | undefined>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const module = modules.find((module) => module.key === searchParams.get('module'));
    if (module) module.props = { ...module.props, ...module.configProps };
    return module;
  });
  const [title, setTitle] = useState<string | undefined>(selectedModule?.label);
  const [height, setHeight] = useState<number>(500);

  const handleModuleChange = (event: SelectChangeEvent<string>) => {
    const module = modules.find((module) => module.key === event.target.value);
    if (module) module.props = { ...module.props, ...module.configProps }; // Merge props with configProps
    window.history.replaceState(null, '', window.location.pathname); // Remove all query params
    setSelectedModule(module);
    setTitle(module?.title);
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
          <Tooltip title="Dra bokmärket till bokmärkesfältet" arrow>
            <Box sx={{ width: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Bookmark label={selectedModule?.title ?? ''} height={height} disabled={!selectedModule} />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Titel"
            value={title ?? ''}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Höjd"
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">px</InputAdornment>
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ height, border: '2px dashed', borderColor: 'primary.main', overflow: 'hidden' }}>
        <Module title={title ?? null} selectedModule={selectedModule ?? null} />
      </Box>
    </Box>
  );
};

export default ModulesPage;
