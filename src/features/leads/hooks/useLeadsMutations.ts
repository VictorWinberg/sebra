import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createLead, deleteLead, updateLead } from '../api/leadsApi';

export const useCreateLead = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      showSnackbar('Lead skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när din lead skulle skapas.', 'error');
    }
  });
};

export const useUpdateLead = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      showSnackbar('Lead uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när din lead skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      showSnackbar('Lead borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när din lead skulle tas bort.', 'error');
    }
  });
};
