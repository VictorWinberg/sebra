import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { getLeadsGQL } from '../api/leadsGQL';
import { getLeadsLocal } from '../api/leadsLocal';

export const useLeads = () => {
  const { data: user } = useAuth();
  const fn = user ? getLeadsGQL : getLeadsLocal;
  return useQuery({
    queryKey: ['leads'],
    queryFn: () => fn(),
    select: (data) => data.Leads?.docs?.filter((i) => !!i) || []
  });
};
