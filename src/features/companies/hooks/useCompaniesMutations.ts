import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createCompany, deleteCompany, updateCompany } from '../api/companiesApi';

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      showSnackbar('Bolag skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när bolaget skulle skapas.', 'error');
    }
  });
};

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      showSnackbar('Bolag uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när bolaget skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      showSnackbar('Bolag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när bolaget skulle tas bort.', 'error');
    }
  });
};
