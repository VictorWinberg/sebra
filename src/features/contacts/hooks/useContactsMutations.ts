import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { useSnackbar } from '@/hooks/useSnackbar';
import { createContactGQL, deleteContactGQL, updateContactGQL } from '../api/contactsGQL';
import { createContactLocal, deleteContactLocal, updateContactLocal } from '../api/contactsLocal';

export const useCreateContact = () => {
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? createContactGQL : createContactLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? updateContactGQL : updateContactLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? deleteContactGQL : deleteContactLocal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      showSnackbar('Kontakt borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när kontakten skulle tas bort.', 'error');
    }
  });
};
