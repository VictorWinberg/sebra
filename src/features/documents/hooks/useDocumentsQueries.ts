// third party
import { useQuery } from '@tanstack/react-query';

// project imports
import { DocumentReference_Where, Media_Where } from '@/api/gql/graphql';
import { useIsDemo } from '@/hooks/useIsDemo';
import { getAllFilesFromIndexedDB, getFileFromIndexedDB } from '@/utils/idb';
import { getDocumentGQL, getDocumentReferencesGQL, getDocumentsGQL } from '../api/documentsGQL';
import { getDocumentReferencesLocal } from '../api/documentsLocal';

export const useDocuments = (where?: Media_Where) => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getAllFilesFromIndexedDB : getDocumentsGQL;

  return useQuery({
    queryKey: ['documents', where],
    queryFn: () => fn(where),
    select: (data) => data.allMedia?.docs?.filter((i) => !!i) || [],
    enabled: where && Object.keys(where).length > 0
  });
};

export const useDocument = (id: string | undefined) => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getFileFromIndexedDB : getDocumentGQL;

  return useQuery({
    queryKey: ['documents', id],
    queryFn: id ? () => fn({ id }) : undefined,
    select: (data) => data?.Media,
    enabled: !!id
  });
};

export const useDocumentReferences = (where?: DocumentReference_Where) => {
  const isDemo = useIsDemo();
  const fn = isDemo ? getDocumentReferencesLocal : getDocumentReferencesGQL;

  return useQuery({
    queryKey: ['document_references', where],
    queryFn: () => fn(where),
    select: (data) => data.DocumentReferences?.docs?.filter((i) => !!i) || [],
    enabled: where && Object.keys(where).length > 0
  });
};
