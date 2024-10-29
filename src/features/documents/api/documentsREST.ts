import { Maybe, Media } from '@/api/gql/graphql';
import { API_URL } from '@/config';
import { loadToken } from '@/utils/token';

export const createDocumentRest = async (data: Media & { file?: Maybe<File> }): Promise<Media> => {
  const { file, alt } = data;
  if (!file) throw new Error('No file provided');

  const token = loadToken();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('_payload', JSON.stringify({ alt }));

  const response = await fetch(`${API_URL}/media`, {
    method: 'POST',
    body: formData,
    headers: {
      ...(token && { Authorization: `JWT ${token}` })
    }
  });

  if (!response.ok) {
    throw new Error('Failed to upload document');
  }

  return await response.json();
};

export const updateDocumentRest = async (data: Media & { file?: Maybe<File> }): Promise<Media> => {
  const { file, alt, ...rest } = data;
  const token = loadToken();
  const formData = new FormData();
  file && formData.append('file', file);
  formData.append('_payload', JSON.stringify({ alt, ...rest }));

  const response = await fetch(`${API_URL}/media/?where[id][equals]=${data.id}`, {
    method: 'PATCH',
    body: formData,
    headers: {
      ...(token && { Authorization: `JWT ${token}` })
    }
  });

  if (!response.ok) {
    throw new Error('Failed to update document');
  }

  return await response.json();
};
