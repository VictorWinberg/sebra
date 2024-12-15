import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useIsDemo } from '@/hooks/useIsDemo';
import { useSnackbar } from '@/hooks/useSnackbar';
import { createContactGQL, deleteContactGQL, updateContactGQL } from '../api/contactsGQL';
import { createContactLocal, deleteContactLocal, updateContactLocal } from '../api/contactsLocal';

export const useCreateContact = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createContactLocal : createContactGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateContactLocal : updateContactGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteContactLocal : deleteContactGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      showSnackbar('Kontakt borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när kontakten skulle tas bort.', 'error');
    }
  });
};
