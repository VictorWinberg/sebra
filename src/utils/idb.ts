import { DBSchema, openDB } from 'idb';
import { v4 as uuidv4 } from 'uuid';

export type DocumentContent = {
  documentId: string;
  documentName: string;
  content?: File;
};

interface DocumentsDB extends DBSchema {
  documents: {
    key: string;
    value: DocumentContent;
    indexes: { documentName: string };
  };
}

const dbPromise = openDB<DocumentsDB>('DocumentsDB', 2, {
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

export const getFileFromIndexedDB = async (documentId: string): Promise<DocumentContent | undefined> => {
  return (await dbPromise).get('documents', documentId);
};

export const getAllFilesFromIndexedDB = async (): Promise<DocumentContent[]> => {
  return (await dbPromise).getAll('documents', undefined); // TODO: Do some filtering here
};

export const saveFileToIndexedDB = async ({ documentId, ...document }: DocumentContent): Promise<string> => {
  return (await dbPromise).put('documents', { ...document, documentId: documentId || uuidv4() });
};

export const deleteFileFromIndexedDB = async ({ documentId }: Pick<DocumentContent, 'documentId'>): Promise<void> => {
  return (await dbPromise).delete('documents', documentId);
};
