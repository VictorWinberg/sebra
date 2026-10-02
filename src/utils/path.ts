import { LOCAL_MODE } from '@/config';

export const prefixPath = (path: string, workspace?: string): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (LOCAL_MODE) {
    return normalized;
  }

  return `/${workspace}${normalized}`;
};

export const matchesPath = (pathname: string, path: string, workspace?: string): boolean => {
  return pathname.startsWith(prefixPath(path, workspace));
};
