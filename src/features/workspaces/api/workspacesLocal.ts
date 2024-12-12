import { GetWorkspacesQuery, Workspace } from '@/api/gql/graphql';
import { AssertKeys } from '@/utils';

type LocalWorkspace = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export const verify: AssertKeys<LocalWorkspace, Omit<Workspace, '__typename'>> = true;

export const getWorkspacesLocal = async (): Promise<GetWorkspacesQuery> => {
  const docs: LocalWorkspace[] = [
    { id: 'demo', name: 'Demo', slug: 'demo', createdAt: '2024-02-30', updatedAt: '2024-02-30' }
  ];
  return { Workspaces: { docs } };
};
