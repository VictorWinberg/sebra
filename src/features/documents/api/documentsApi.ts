import { deleteQuery, insertQuery, selectAllQuery } from '@/api/DummyDB';
import { DocumentContent, pick, validateRequiredFields } from '@/utils';

export type DocumentRecord = DocumentReference & DocumentContent;

export type DocumentReference = {
  documentId: string;
  entityType: string;
  entityId: string;
};

export const fetchDocumentReferences = async (where: Partial<DocumentReference>): Promise<DocumentReference[]> => {
  return await selectAllQuery<DocumentReference>('document_references', where);
};

export const createDocumentReference = async (values: DocumentReference) => {
  validateRequiredFields(values, ['documentId', 'entityType', 'entityId']);
  await insertQuery<DocumentReference>('document_references', pick(values, ['documentId', 'entityType', 'entityId']));
};

export const updateDocumentReference = async ({ row, where }: { row: DocumentReference; where: DocumentReference }) => {
  await deleteDocumentReference(where);
  await createDocumentReference(row);
};

export const deleteDocumentReference = async (where: Partial<DocumentReference>) => {
  await deleteQuery<DocumentReference>('document_references', pick(where, ['documentId', 'entityType', 'entityId']));
};
