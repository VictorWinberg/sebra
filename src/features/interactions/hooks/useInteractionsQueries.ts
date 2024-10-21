// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { getInteractionsLocal } from '../api/interactionsLocal';
import { useAppStore } from '@/store';
import { getInteractionsGQL } from '../api/interactionsGQL';

export const useInteractions = () => {
  const [{ isDemo }] = useAppStore();
  const fn = isDemo ? getInteractionsLocal : getInteractionsGQL;
  return useQuery({
    queryKey: ['interactions'],
    queryFn: () => fn(),
    select: (data) => data.Interactions?.docs?.filter((i) => !!i) || []
  });
};
