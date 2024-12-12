import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { useIsDemo } from '@/hooks/useIsDemo';
import { deleteFileFromIndexedDB, saveFileToIndexedDB } from '@/utils';
import {
  createDocumentReferenceGQL,
  deleteDocumentGQL,
  deleteDocumentReferenceGQL,
  updateDocumentReferenceGQL
} from '../api/documentsGQL';
import {
  createDocumentReferenceLocal,
  deleteDocumentReferenceLocal,
  updateDocumentReferenceLocal
} from '../api/documentsLocal';
import { createDocumentRest, updateDocumentRest } from '../api/documentsREST';

export const useSaveDocument = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? saveFileToIndexedDB : createDocumentRest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokumentet sparat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle sparas.', 'error');
    }
  });
};

export const useUpdateDocument = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? saveFileToIndexedDB : updateDocumentRest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokumentet uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteDocument = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteFileFromIndexedDB : deleteDocumentGQL,
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['documents'] });
        queryClient.invalidateQueries({ queryKey: ['document_references'] });
      }, 100);
      showSnackbar('Dokumentet borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};

export const useCreateDocumentReference = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createDocumentReferenceLocal : createDocumentReferenceGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateDocumentReferenceLocal : updateDocumentReferenceGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteDocumentReferenceLocal : deleteDocumentReferenceGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['document_references'] });
      showSnackbar('Dokument borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};
