import { useCallback, useState } from 'react';

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { getCookieWorkspace, setCookieWorkspace } from '@/utils/cookie';
import { useWorkspaces } from '../hooks/useWorkspacesQueries';

export const WorkspaceSelector = () => {
  const queryClient = useQueryClient();
  const { data: workspaces = [] } = useWorkspaces();
  const [selectedWorkspace, setSelectedWorkspace] = useState(getCookieWorkspace);

  function setWorkspace(value: string) {
    setCookieWorkspace(value);
    setSelectedWorkspace(value);
  }

  const handleChange = useCallback((event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setWorkspace(newValue);
    queryClient.invalidateQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (workspaces.length > 1) {
    return (
      <FormControl sx={{ mx: 1 }}>
        <Select value={selectedWorkspace} onChange={handleChange}>
          {workspaces.map((workspace) => (
            <MenuItem key={workspace.slug} value={workspace.id}>
              {workspace.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return null;
};
