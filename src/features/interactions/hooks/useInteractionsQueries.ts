// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { fetchInteractions } from '../api/interactionsApi';

export const useInteractions = (where: { contactId: number } | undefined) => {
  return useQuery({
    queryKey: ['interactions', where],
    queryFn: () => fetchInteractions(where!),
    enabled: where && Object.keys(where).length > 0
  });
};
