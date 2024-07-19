import { useQuery } from '@tanstack/react-query';

import { fetchLeads } from '../api/leadsApi';

export const useLeads = () => {
  return useQuery({ queryKey: ['leads'], queryFn: fetchLeads });
};
