import { useParams } from 'react-router-dom';

import { prefixPath } from '@/utils/path';

export const useAppPath = () => {
  const { workspace } = useParams();

  return (path: string) => prefixPath(path, workspace);
};
