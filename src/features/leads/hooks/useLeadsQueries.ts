import { useQuery } from '@tanstack/react-query';

import { useIsDemo } from '@/hooks/useIsDemo';
import { getLeadsGQL } from '../api/leadsGQL';
import { getLeadsLocal } from '../api/leadsLocal';

export const useLeads = () => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getLeadsLocal : getLeadsGQL;
  return useQuery({
    queryKey: ['leads'],
    queryFn: () => fn(),
    select: (data) => data.Leads?.docs?.filter((i) => !!i) || []
  });
};
