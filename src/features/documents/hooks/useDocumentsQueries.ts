// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { getAllFilesFromIndexedDB, getFileFromIndexedDB } from '@/utils/idb';
import { DocumentReference, fetchDocumentReferences } from '../api/documentsApi';

export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: getAllFilesFromIndexedDB
  });
};

export const useDocument = (documentId: string | undefined) => {
  return useQuery({
    queryKey: ['documents', documentId],
    queryFn: () => getFileFromIndexedDB(documentId!),
    enabled: !!documentId
  });
};

export const useDocumentReferences = (where: Partial<DocumentReference> | undefined) => {
  return useQuery({
    queryKey: ['document_references', where],
    queryFn: () => fetchDocumentReferences(where!),
    enabled: where && Object.keys(where).length > 0
  });
};
