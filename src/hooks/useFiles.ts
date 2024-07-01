// third party
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// project imports
import {
  deleteFileFromIndexedDB,
  getAllFilesFromIndexedDB,
  getFileFromIndexedDB,
  saveFileToIndexedDB,
  updateFileInIndexedDB
} from '@/utils/idb';
import { useSnackbar } from './useSnackbar';

export const useFiles = () => {
  return useQuery({
    queryKey: ['files'],
    queryFn: getAllFilesFromIndexedDB
  });
};

export const useFile = (documentId: string | undefined) => {
  return useQuery({
    queryKey: ['file', documentId],
    queryFn: () => getFileFromIndexedDB(documentId!),
    enabled: !!documentId
  });
};

export const useSaveFile = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: saveFileToIndexedDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] });
      showSnackbar('Dokumentet sparat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle sparas.', 'error');
    }
  });
};

export const useUpdateFile = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateFileInIndexedDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] });
      showSnackbar('Dokumentet uppdatarat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteFile = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteFileFromIndexedDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] });
      showSnackbar('Dokumentet borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};
