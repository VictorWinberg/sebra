import { LOCAL_MODE } from '@/config';
import { useParams } from 'react-router-dom';

export const useIsDemo = () => {
  const { workspace } = useParams();

  if (LOCAL_MODE) {
    return true;
  }

  return workspace === 'demo';
};
