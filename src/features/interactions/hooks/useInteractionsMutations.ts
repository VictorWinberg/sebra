import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import {
  createInteraction,
  createInteractionContacts,
  deleteInteraction,
  deleteInteractionContacts,
  updateInteraction,
  updateInteractionContacts
} from '../api/interactionsApi';

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
    mutationFn: (params: { interactionId: string }) =>
      Promise.all([deleteInteraction(params), deleteInteractionContacts(params)]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle tas bort.', 'error');
    }
  });
};

export const useCreateInteractionContacts = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createInteractionContacts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion skapad!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle skapas.', 'error');
    }
  });
};

export const useUpdateInteractionContacts = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateInteractionContacts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interactions'] });
      showSnackbar('Interaktion uppdaterad!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när interaktionen skulle uppdateras.', 'error');
    }
  });
};
