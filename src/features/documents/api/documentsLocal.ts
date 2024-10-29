import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, selectAllQuery } from '@/api/DummyDB';
import {
  CreateDocumentReferenceMutation,
  DeleteDocumentReferenceMutation,
  DocumentReference,
  DocumentReference_Where,
  GetDocumentReferencesQuery,
  Media,
  UpdateDocumentReferenceMutation
} from '@/api/gql/graphql';
import { AssertKeys, convertToSQLWhereClause, getAllFilesFromIndexedDB, pick, validateRequiredFields } from '@/utils';

type LocalDocumentReference = {
  id: string;
  document: Media;
  entityType: string;
  entityId: string;
  createdAt?: string;
  updatedAt?: string;
};

export const verify: AssertKeys<LocalDocumentReference, Omit<DocumentReference, '__typename'>> = true;

type FlatDocumentReference = Omit<LocalDocumentReference, 'document'> & { document: string };

export const getDocumentReferencesLocal = async (
  where?: DocumentReference_Where
): Promise<GetDocumentReferencesQuery> => {
  const refs = await selectAllQuery<FlatDocumentReference>('document_references', convertToSQLWhereClause(where));
  const { allMedia } = await getAllFilesFromIndexedDB({ id: { in: refs.map((doc) => doc.document) } });
  const docs = refs.map((ref) => ({ ...ref, document: allMedia!.docs!.find((doc) => doc!.id === ref.document)! }));
  return { DocumentReferences: { docs } };
};

export const createDocumentReferenceLocal = async (
  data: Omit<DocumentReference, 'id'>
): Promise<CreateDocumentReferenceMutation> => {
  validateRequiredFields(data, ['document', 'entityType', 'entityId']);
  const params = pick({ ...data, id: uuidv4(), document: data.document.id }, [
    'id',
    'document',
    'entityType',
    'entityId'
  ]);
  return { createDocumentReference: await insertQuery<FlatDocumentReference>('document_references', params) };
};

export const updateDocumentReferenceLocal = async ({
  id,
  ...data
}: DocumentReference): Promise<UpdateDocumentReferenceMutation> => {
  await deleteDocumentReferenceLocal({ id });
  const res = await createDocumentReferenceLocal(data);
  return { updateDocumentReference: res.createDocumentReference };
};

export const deleteDocumentReferenceLocal = async ({
  id
}: Pick<DocumentReference, 'id'>): Promise<DeleteDocumentReferenceMutation> => {
  return { deleteDocumentReference: await deleteQuery<FlatDocumentReference>('document_references', { id }) };
};
