import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createAssignment, deleteAssignment, updateAssignment } from '../api/assignmentsApi';

export const useCreateAssignment = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      showSnackbar('Uppdrag skapat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när uppgiften skulle skapas.', 'error');
    }
  });
};

export const useUpdateAssignment = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: updateAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      showSnackbar('Uppdrag uppdaterat!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när uppgiften skulle uppdateras.', 'error');
    }
  });
};

export const useDeleteAssignment = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      showSnackbar('Uppdrag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när uppgiften skulle tas bort.', 'error');
    }
  });
};
