import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createInteraction, deleteInteraction, updateInteraction } from '../api/interactionsApi';

export const useCreateInteraction = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createInteraction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion sparat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle sparas.', 'error');
    }
  });
};

export const useUpdateInteraction = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateInteraction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteInteraction = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteInteraction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle tas bort.', 'error');
    }
  });
};
