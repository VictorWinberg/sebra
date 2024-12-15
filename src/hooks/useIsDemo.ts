import { useParams } from 'react-router-dom';

export const useIsDemo = () => {
  const { workspace } = useParams();
  return workspace === 'demo';
};
