import { openDB } from 'idb';

export interface Document {
  name: string;
  content: File;
}

const dbPromise = openDB('DocumentsDB', 1, {
  upgrade(db) {
    db.createObjectStore('documents', { keyPath: 'name' });
  }
});

export const saveFileToIndexedDB = async (file: File): Promise<void> => {
  const db = await dbPromise;
  await db.put('documents', { name: file.name, content: file });
};

export const getFileFromIndexedDB = async (fileName: string): Promise<Document | undefined> => {
  const db = await dbPromise;
  return db.get('documents', fileName);
};

export const getAllFilesFromIndexedDB = async (): Promise<Document[]> => {
  const db = await dbPromise;
  return db.getAll('documents');
};

export const deleteFileFromIndexedDB = async (fileName: string): Promise<void> => {
  const db = await dbPromise;
  await db.delete('documents', fileName);
};
