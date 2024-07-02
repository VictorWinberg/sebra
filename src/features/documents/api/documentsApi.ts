import { deleteQuery, insertQuery, selectAllQuery } from '@/api/DummyDB';
import { DocumentContent, pick } from '@/utils';

export type DocumentRecord = DocumentReference & DocumentContent;

export type DocumentReference = {
  documentId: string;
  entityType: string;
  entityId: string;
};

export const fetchDocumentReferences = async (where: Partial<DocumentReference>): Promise<DocumentReference[]> => {
  return await selectAllQuery<DocumentReference>('document_references', where);
};

export const createDocumentReference = async (documentReference: DocumentReference) => {
  await insertQuery<DocumentReference>(
    'document_references',
    pick(documentReference, ['documentId', 'entityType', 'entityId'])
  );
};

export const deleteDocumentReference = async (where: Partial<DocumentReference>) => {
  await deleteQuery<DocumentReference>('document_references', pick(where, ['documentId', 'entityType', 'entityId']));
};
