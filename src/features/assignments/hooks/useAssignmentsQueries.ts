import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { getAssignmentGQL, getAssignmentsGQL } from '../api/assignmentsGQL';
import { getAssignmentLocal, getAssignmentsLocal } from '../api/assignmentsLocal';

export const useAssignments = () => {
  const { data: user } = useAuth();
  const fn = user ? getAssignmentsGQL : getAssignmentsLocal;
  return useQuery({
    queryKey: ['assignments'],
    queryFn: () => fn(),
    select: (data) => data.Assignments?.docs?.filter((i) => !!i) || []
  });
};

export const useAssignment = (assignmentId: string | undefined) => {
  const { data: user } = useAuth();
  const fn = user ? getAssignmentGQL : getAssignmentLocal;

  return useQuery({
    queryKey: ['assignment', assignmentId],
    queryFn: () => fn({ id: assignmentId! }),
    select: (data) => data.Assignment!,
    enabled: !!assignmentId
  });
};
