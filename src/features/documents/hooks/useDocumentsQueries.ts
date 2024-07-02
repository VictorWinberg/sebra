import { useQuery } from '@tanstack/react-query';

import { DocumentRecord, fetchDocument, fetchDocumentReferences, fetchDocuments } from '../api/documentsApi';

export const useDocuments = (where: Partial<DocumentRecord>) => {
  return useQuery({ queryKey: ['documents', where], queryFn: () => fetchDocuments(where) });
};

export const useDocument = (documentId: string | undefined) => {
  return useQuery({
    queryKey: ['document', documentId],
    queryFn: () => fetchDocument(documentId!),
    enabled: !!documentId
  });
};

export const useDocumentReferences = (documentId: string | undefined) => {
  return useQuery({
    queryKey: ['document_references', documentId],
    queryFn: () => fetchDocumentReferences(documentId!),
    enabled: !!documentId
  });
};
