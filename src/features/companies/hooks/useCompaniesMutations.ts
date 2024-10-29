import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { useAppStore } from '@/store';
import { createCompanyGQL, deleteCompanyGQL, updateCompanyGQL } from '../api/companiesGQL';
import { createCompanyLocal, deleteCompanyLocal, updateCompanyLocal } from '../api/companiesLocal';

export const useCreateCompany = () => {
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createCompanyLocal : createCompanyGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateCompanyLocal : updateCompanyGQL,
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
  const [{ isDemo }] = useAppStore();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteCompanyLocal : deleteCompanyGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      showSnackbar('Bolag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när bolaget skulle tas bort.', 'error');
    }
  });
};
