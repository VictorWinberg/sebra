import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createDocument, deleteDocument, updateDocument } from '../api/documentsApi';

export const useCreateDocument = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokument skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle skapas.', 'error');
    }
  });
};

export const useUpdateDocument = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokument uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      showSnackbar('Dokument borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när dokumentet skulle tas bort.', 'error');
    }
  });
};
