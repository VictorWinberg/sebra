// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { fetchInteractions } from '../api/interactionsApi';

export const useInteractions = () => {
  return useQuery({
    queryKey: ['interactions'],
    queryFn: () => fetchInteractions()
  });
};
