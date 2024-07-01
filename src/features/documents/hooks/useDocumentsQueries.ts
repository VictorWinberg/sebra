import { useQuery } from '@tanstack/react-query';

import { fetchDocument, fetchDocuments } from '../api/documentsApi';

export const useDocuments = () => {
  return useQuery({ queryKey: ['documents'], queryFn: fetchDocuments });
};

export const useDocument = (documentId: string | undefined) => {
  return useQuery({
    queryKey: ['document', documentId],
    queryFn: () => fetchDocument(documentId!),
    enabled: !!documentId
  });
};
