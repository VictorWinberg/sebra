import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { createAssignmentLocal, deleteAssignmentLocal, updateAssignmentLocal } from '../api/assignmentsLocal';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { createAssignmentGQL, deleteAssignmentGQL, updateAssignmentGQL } from '../api/assignmentsGQL';

export const useCreateAssignment = () => {
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? createAssignmentGQL : createAssignmentLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? updateAssignmentGQL : updateAssignmentLocal,
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
  const { data: user } = useAuth();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: user ? deleteAssignmentGQL : deleteAssignmentLocal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      showSnackbar('Uppdrag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när uppgiften skulle tas bort.', 'error');
    }
  });
};
