// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { getInteractionsLocal } from '../api/interactionsLocal';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { getInteractionsGQL } from '../api/interactionsGQL';

export const useInteractions = () => {
  const { data: user } = useAuth();
  const fn = user ? getInteractionsGQL : getInteractionsLocal;
  return useQuery({
    queryKey: ['interactions'],
    queryFn: () => fn(),
    select: (data) => data.Interactions?.docs?.filter((i) => !!i) || []
  });
};
