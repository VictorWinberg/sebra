// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { getInteractionsLocal } from '../api/interactionsLocal';
import { useIsDemo } from '@/hooks/useIsDemo';
import { getInteractionsGQL } from '../api/interactionsGQL';

export const useInteractions = () => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getInteractionsLocal : getInteractionsGQL;
  return useQuery({
    queryKey: ['interactions'],
    queryFn: () => fn(),
    select: (data) => data.Interactions?.docs?.filter((i) => !!i) || []
  });
};
