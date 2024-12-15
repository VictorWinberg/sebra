import { useCallback, useEffect } from 'react';

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useWorkspaces } from '../hooks/useWorkspacesQueries';
import { useQueryClient } from '@tanstack/react-query';

export const WorkspaceSelector = () => {
  const { workspace } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: workspaces = [] } = useWorkspaces();

  useEffect(() => {
    queryClient.invalidateQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workspace]);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const newWorkspace = event.target.value;
      const url = location.pathname.replace(`/${workspace}`, `/${newWorkspace}`);

      navigate(url);
    },
    [location.pathname, navigate, workspace]
  );

  if (workspaces.length > 1) {
    return (
      <FormControl sx={{ mx: 1 }}>
        <Select value={workspace || ''} onChange={handleChange}>
          {workspaces.map((workspace) => (
            <MenuItem key={workspace.slug} value={workspace.slug}>
              {workspace.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return null;
};
