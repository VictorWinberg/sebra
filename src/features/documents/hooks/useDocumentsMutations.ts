import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { useAppStore } from '@/store';
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? saveFileToIndexedDB : createDocumentRest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokumentet sparat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle sparas.', 'error');
    }
  });
};

export const useUpdateDocument = () => {
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? saveFileToIndexedDB : updateDocumentRest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokumentet uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteDocument = () => {
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ id }: { id: string }) =>
      Promise.all([
        isDemo ? deleteFileFromIndexedDB({ id }) : deleteDocumentGQL({ id })
        // deleteDocumentReferenceLocal({ document: id })
      ]),
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
  const [{ isDemo }] = useAppStore();
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
  const [{ isDemo }] = useAppStore();
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
  const [{ isDemo }] = useAppStore();
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
