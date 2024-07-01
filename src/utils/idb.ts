import { openDB } from 'idb';
import { v4 as uuidv4 } from 'uuid';

export type FileDocument = {
  documentId: string;
  documentName: string;
  content: File;
};

const dbPromise = openDB('DocumentsDB', 2, {
  upgrade(db, oldVersion) {
    if (oldVersion < 2) {
      if (db.objectStoreNames.contains('documents')) {
        db.deleteObjectStore('documents');
      }

      const store = db.createObjectStore('documents', { keyPath: 'documentId' });
      store.createIndex('documentName', 'documentName', { unique: false });
    }
  }
});

export const getFileFromIndexedDB = async (documentId: string): Promise<FileDocument | undefined> => {
  return (await dbPromise).get('documents', documentId);
};

export const getAllFilesFromIndexedDB = async (): Promise<FileDocument[]> => {
  return (await dbPromise).getAll('documents');
};

export const saveFileToIndexedDB = async ({ documentName, content }: Partial<FileDocument>): Promise<IDBValidKey> => {
  return (await dbPromise).put('documents', { documentId: uuidv4(), documentName, content });
};

export const updateFileInIndexedDB = async (document: Partial<FileDocument>): Promise<IDBValidKey> => {
  return (await dbPromise).put('documents', document);
};

export const deleteFileFromIndexedDB = async ({ documentId }: Pick<FileDocument, 'documentId'>): Promise<void> => {
  return (await dbPromise).delete('documents', documentId);
};
