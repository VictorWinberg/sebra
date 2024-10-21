import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAppStore } from '@/store';
import { useSnackbar } from '@/hooks/useSnackbar';
import { createLeadGQL, deleteLeadGQL, updateLeadGQL } from '../api/leadsGQL';
import { createLeadLocal, deleteLeadLocal, updateLeadLocal } from '../api/leadsLocal';

export const useCreateLead = () => {
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createLeadLocal : createLeadGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateLeadLocal : updateLeadGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteLeadLocal : deleteLeadGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      showSnackbar('Lead borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när din lead skulle tas bort.', 'error');
    }
  });
};
