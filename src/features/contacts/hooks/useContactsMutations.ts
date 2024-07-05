import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createContact, deleteContact, updateContact } from '../api/contactsApi';

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      showSnackbar('Kontakt skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när kontakten skulle skapas.', 'error');
    }
  });
};

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      showSnackbar('Kontakt uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när kontakten skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      showSnackbar('Kontakt borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när kontakten skulle tas bort.', 'error');
    }
  });
};
