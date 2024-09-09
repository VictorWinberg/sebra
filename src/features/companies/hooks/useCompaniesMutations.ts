import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { useSnackbar } from '@/hooks/useSnackbar';
import { createCompanyGQL, deleteCompanyGQL, updateCompanyGQL } from '../api/companiesGQL';
import { createCompanyLocal, deleteCompanyLocal, updateCompanyLocal } from '../api/companiesLocal';

export const useCreateCompany = () => {
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? createCompanyGQL : createCompanyLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? updateCompanyGQL : updateCompanyLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? deleteCompanyGQL : deleteCompanyLocal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      showSnackbar('Bolag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när bolaget skulle tas bort.', 'error');
    }
  });
};
