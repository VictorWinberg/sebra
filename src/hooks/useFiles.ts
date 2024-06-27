// third party
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// project imports
import {
  deleteFileFromIndexedDB,
  getAllFilesFromIndexedDB,
  getFileFromIndexedDB,
  saveFileToIndexedDB
} from '@/utils/idb';
import { useSnackbar } from './useSnackbar';

export const useFiles = () => {
  return useQuery({
    queryKey: ['files'],
    queryFn: getAllFilesFromIndexedDB
  });
};

export const useFile = (fileName: string) => {
  return useQuery({
    queryKey: ['file', fileName],
    queryFn: () => getFileFromIndexedDB(fileName),
    enabled: !!fileName
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
