import { useQuery } from '@tanstack/react-query';

import { useIsDemo } from '@/hooks/useIsDemo';
import { getWorkspacesGQL } from '../api/workspacesGQL';
import { getWorkspacesLocal } from '../api/workspacesLocal';

export const useWorkspaces = () => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getWorkspacesLocal : getWorkspacesGQL;
  return useQuery({
    queryKey: ['workspaces'],
    queryFn: () => fn(),
    select: (data) => data.Workspaces?.docs?.filter((i) => !!i) || []
  });
};
