import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { useSnackbar } from '@/hooks/useSnackbar';
import { createLeadGQL, deleteLeadGQL, updateLeadGQL } from '../api/leadsGQL';
import { createLeadLocal, deleteLeadLocal, updateLeadLocal } from '../api/leadsLocal';

export const useCreateLead = () => {
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? createLeadGQL : createLeadLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? updateLeadGQL : updateLeadLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? deleteLeadGQL : deleteLeadLocal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      showSnackbar('Lead borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när din lead skulle tas bort.', 'error');
    }
  });
};
