import { useEffect, useMemo, useState } from 'react';

// project imports
import { loadToken } from '@/utils/token';

const getUrlBlob = async (url: string): Promise<Blob> => {
  const token = loadToken('jwt');
  const workspace = loadToken('workspace');

  const response = await fetch(url, {
    headers: {
      ...(token && { Authorization: `JWT ${token}` }),
      ...(workspace && { 'X-Payload-Workspace': workspace })
    }
  });

  if (!response.ok) {
    throw new Error('Failed to url blob');
  }

  return await response.blob();
};

export const useBlobUrl = (url: string | undefined) => {
  const [blob, setBlob] = useState<Blob>();
  const blobUrl = useMemo(() => blob && URL.createObjectURL(blob), [blob]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (url) {
        setIsLoading(true);
        const blob = await getUrlBlob(url);
        setBlob(blob);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { blob, url: blobUrl, isLoading };
};
