import { deleteQuery, insertQuery, selectAllQuery } from '@/api/DummyDB';
import {
  DocumentContent,
  deleteFileFromIndexedDB,
  getAllFilesFromIndexedDB,
  getFileFromIndexedDB,
  pick,
  saveFileToIndexedDB,
  toMap,
  updateFileInIndexedDB
} from '@/utils';

export type DocumentRecord = DocumentReference & DocumentContent;

export type DocumentReference = {
  documentId: string;
  entityType: string;
  entityId: string;
};

export const fetchDocuments = async (where: Partial<DocumentRecord>): Promise<DocumentRecord[]> => {
  const files = await getAllFilesFromIndexedDB();
  const fileMap = toMap(files, 'documentId');
  const refs = await selectAllQuery<DocumentReference>('document_references', where);

  return refs.map((ref) => ({ ...ref, ...fileMap.get(ref.documentId)! }));
};

export const fetchDocument = async (documentId: string): Promise<DocumentContent | undefined> => {
  return await getFileFromIndexedDB(documentId);
};

export const fetchDocumentReferences = async (documentId: string): Promise<DocumentReference[]> => {
  return await selectAllQuery<DocumentReference>('document_references', { documentId });
};

export const createDocument = async (document: Omit<DocumentRecord, 'documentId'>) => {
  const documentId = await saveFileToIndexedDB(document);
  return await insertQuery<DocumentReference>(
    'document_references',
    pick({ ...document, documentId }, ['documentId', 'entityType', 'entityId'])
  );
};

export const updateDocument = async (document: DocumentContent) => {
  await updateFileInIndexedDB(document);
};

export const deleteDocument = async ({ documentId }: Pick<DocumentRecord, 'documentId'>) => {
  await deleteFileFromIndexedDB({ documentId });
  await deleteQuery<DocumentReference>('document_references', { documentId });
};
