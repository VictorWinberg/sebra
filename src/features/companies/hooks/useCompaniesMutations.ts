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
      showSnackbar('Företag skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när företaget skulle skapas.', 'error');
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
      showSnackbar('Företag uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när företaget skulle uppdateras.', 'error');
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
      showSnackbar('Företag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när företaget skulle tas bort.', 'error');
    }
  });
};
