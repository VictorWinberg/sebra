import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createDocumentReference, deleteDocumentReference, updateDocumentReference } from '../api/documentsApi';
import { deleteFileFromIndexedDB, saveFileToIndexedDB } from '@/utils';

export const useSaveDocument = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: saveFileToIndexedDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokumentet sparat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle sparas.', 'error');
    }
  });
};

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (params: { documentId: string }) =>
      Promise.all([deleteFileFromIndexedDB(params), deleteDocumentReference(params)]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokumentet borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};

export const useCreateDocumentReference = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createDocumentReference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokument skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle skapas.', 'error');
    }
  });
};

export const useUpdateDocumentReference = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateDocumentReference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokument uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteDocumentReference = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteDocumentReference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokument borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};
