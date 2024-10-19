import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createInteractionLocal, deleteInteractionLocal, updateInteractionLocal } from '../api/interactionsLocal';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { createInteractionGQL, deleteInteractionGQL, updateInteractionGQL } from '../api/interactionsGQL';

export const useCreateInteraction = () => {
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? createInteractionGQL : createInteractionLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? updateInteractionGQL : updateInteractionLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? deleteInteractionGQL : deleteInteractionLocal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle tas bort.', 'error');
    }
  });
};
