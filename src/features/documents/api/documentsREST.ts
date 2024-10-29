import { Media } from '@/api/gql/graphql';
import { API_URL } from '@/config';
import { loadToken } from '@/utils/token';

export const createDocumentRest = async (data: Media & { upload?: File }): Promise<{ doc: Media }> => {
  const { upload, alt } = data;
  if (!upload) throw new Error('No file provided');

  const token = loadToken();
  const formData = new FormData();
  formData.append('file', upload);
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

export const updateDocumentRest = async (data: Media & { upload?: File }): Promise<{ doc: Media }> => {
  const { upload, alt } = data;
  const token = loadToken();

  let body;
  let headers = {};
  if (upload) {
    body = new FormData();
    body.append('file', upload);
    body.append('_payload', JSON.stringify({ alt }));
  } else {
    body = JSON.stringify({ alt });
    headers = { 'Content-Type': 'application/json' };
  }

  const response = await fetch(`${API_URL}/media/?where[id][equals]=${data.id}`, {
    method: 'PATCH',
    body,
    headers: {
      ...(token && { Authorization: `JWT ${token}` }),
      ...headers
    }
  });

  if (!response.ok) {
    throw new Error('Failed to update document');
  }

  return await response.json();
};
