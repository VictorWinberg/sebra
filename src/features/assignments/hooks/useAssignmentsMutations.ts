import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSnackbar } from '@/hooks/useSnackbar';
import { useIsDemo } from '@/hooks/useIsDemo';
import { createAssignmentGQL, deleteAssignmentGQL, updateAssignmentGQL } from '../api/assignmentsGQL';
import { createAssignmentLocal, deleteAssignmentLocal, updateAssignmentLocal } from '../api/assignmentsLocal';

export const useCreateAssignment = () => {
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? createAssignmentLocal : createAssignmentGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? updateAssignmentLocal : updateAssignmentGQL,
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
  const isDemo = useIsDemo();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: isDemo ? deleteAssignmentLocal : deleteAssignmentGQL,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      showSnackbar('Uppdrag borttaget!');
    },
    onError: () => {
      showSnackbar('Ett fel uppstod när uppgiften skulle tas bort.', 'error');
    }
  });
};
