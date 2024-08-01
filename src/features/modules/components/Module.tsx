import { useEffect, useMemo } from 'react';

// material-ui
import { Box, Typography } from '@mui/material';

// project imports
import { StringParam, useQueryParam } from '@/hooks/useQueryParam';
import ModuleForm from '../components/ModuleForm';
import ModuleTable from '../components/ModuleTable';
import { AnyData, AnyProps, ModuleConfigItem, modules } from '../config/ModuleConfig';

interface ModuleProps {
  title?: string | null;
  selectedModule?: ModuleConfigItem<AnyData, AnyProps> | null;
}

const Module = (props: ModuleProps) => {
  const [title, setTitle] = useQueryParam('title', StringParam, '');
  const [initialModule, setInitialModule] = useQueryParam('module', StringParam, '');
  const selectedModule = useMemo(() => modules.find((module) => module.key === initialModule), [initialModule]);

  useEffect(() => {
    if (props.selectedModule === undefined) return;
    setInitialModule(props.selectedModule?.key ?? '');
  }, [props.selectedModule, setInitialModule]);

  useEffect(() => {
    if (props.title === undefined) return;
    setTitle(props.title ?? '');
  }, [props.title, setTitle]);

  return (
    <Box sx={{ my: 1 }}>
      <Typography variant="h4" color="primary">
        {title}
      </Typography>

      <Box sx={{ my: 1 }} />

      {selectedModule?.type === 'table' && <ModuleTable selectedModule={selectedModule} />}
      {selectedModule?.type === 'form' && <ModuleForm selectedModule={selectedModule} />}
    </Box>
  );
};

export default Module;
