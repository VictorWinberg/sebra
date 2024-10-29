import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createInteractionLocal, deleteInteractionLocal, updateInteractionLocal } from '../api/interactionsLocal';
import { useAppStore } from '@/store';
import { createInteractionGQL, deleteInteractionGQL, updateInteractionGQL } from '../api/interactionsGQL';

export const useCreateInteraction = () => {
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createInteractionLocal : createInteractionGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateInteractionLocal : updateInteractionGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteInteractionLocal : deleteInteractionGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle tas bort.', 'error');
    }
  });
};
