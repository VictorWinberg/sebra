import { v4 as uuidv4 } from 'uuid';

import {
  deleteParameterizedQuery,
  insertParameterizedQuery,
  selectParameterizedQuery,
  updateParameterizedQuery
} from '@/api/DummyDB';
import { pick } from '@/utils';

export const fetchDocument = async (documentId: string) => {
  return await selectParameterizedQuery<Document>('documents', { documentId });
};

export const createDocument = async (document: Partial<Document>) => {
  return await insertParameterizedQuery<Document>('documents', { ...document, documentId: uuidv4() });
};

export const updateDocument = async (document: Partial<Document>) => {
  return await updateParameterizedQuery<Document>('documents', document, pick(document, ['documentId']));
};

export const deleteDocument = async ({ documentId }: Pick<Document, 'documentId'>) => {
  return await deleteParameterizedQuery<Document>('documents', { documentId });
};
