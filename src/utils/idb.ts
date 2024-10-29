import { DBSchema, openDB } from 'idb';
import { v4 as uuidv4 } from 'uuid';

import { GetDocumentQuery, GetDocumentsQuery, Maybe, Media, Media_Where } from '@/api/gql/graphql';
import { omit } from './object';

type LocalMedia = {
  id: string;
  file?: File;
  alt?: Maybe<string>;
};

interface DocumentsDB extends DBSchema {
  documents: {
    key: string;
    value: LocalMedia;
    indexes: { alt: string };
  };
}

const DB_VERSION = 3;

const dbPromise = openDB<DocumentsDB>('DocumentsDB', DB_VERSION, {
  upgrade(db, oldVersion) {
    if (oldVersion < DB_VERSION) {
      if (db.objectStoreNames.contains('documents')) {
        db.deleteObjectStore('documents');
      }

      const store = db.createObjectStore('documents', { keyPath: 'id' });
      store.createIndex('alt', 'alt', { unique: false });
    }
  }
});

export const getFileFromIndexedDB = async ({ id }: Pick<Media, 'id'>): Promise<GetDocumentQuery> => {
  const local = await (await dbPromise).get('documents', id);
  return { Media: local && localMediaToMedia(local) };
};

export const getAllFilesFromIndexedDB = async (where?: Media_Where): Promise<GetDocumentsQuery> => {
  const allDocs = await (await dbPromise).getAll('documents', undefined);
  const docs = allDocs.map(localMediaToMedia).filter(filterMedia(where));
  return { allMedia: { docs } };
};

export const saveFileToIndexedDB = async ({ id, alt, upload }: Media & { upload?: File }): Promise<{ doc: Media }> => {
  (await dbPromise).put('documents', { id: id || uuidv4(), alt, file: upload || undefined });
  return { doc: localMediaToMedia({ id, alt, file: upload }) };
};

export const deleteFileFromIndexedDB = async ({ id }: Pick<LocalMedia, 'id'>): Promise<void> => {
  return (await dbPromise).delete('documents', id);
};

const localMediaToMedia = ({ id, alt, file }: LocalMedia): Media => ({
  id,
  alt,
  filename: file?.name,
  mimeType: file?.type,
  url: file && URL.createObjectURL(file),
  thumbnailURL: file && URL.createObjectURL(file),
  updatedAt: file?.lastModified,
  createdAt: file?.lastModified
});

const filterMedia = (where?: Media_Where) => (data: Media) => {
  if (!where) return true;
  const values = omit(where, ['AND', 'OR']);
  for (const [key, query] of Object.entries(values)) {
    const value = data[key as keyof Media];
    if (typeof query === 'object' && query !== null) {
      if ('in' in query && !query.in?.includes(value)) return false;
      if ('not_in' in query && query.not_in?.includes(value)) return false;
      if ('equals' in query && query.equals !== value) return false;
      if ('not_equals' in query && query.not_equals === value) return false;
      if ('exists' in query && query.exists !== (value !== undefined)) return false;
      if ('contains' in query && !value?.includes(query.contains)) return false;
    }
  }
  return true;
};
