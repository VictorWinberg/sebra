import { useQuery } from '@tanstack/react-query';

import { useAppStore } from '@/store';
import { getAssignmentGQL, getAssignmentsGQL } from '../api/assignmentsGQL';
import { getAssignmentLocal, getAssignmentsLocal } from '../api/assignmentsLocal';

export const useAssignments = () => {
  const [{ isDemo }] = useAppStore();
  const fn = isDemo ? getAssignmentsLocal : getAssignmentsGQL;
  return useQuery({
    queryKey: ['assignments'],
    queryFn: () => fn(),
    select: (data) => data.Assignments?.docs?.filter((i) => !!i) || []
  });
};

export const useAssignment = (assignmentId: string | undefined) => {
  const [{ isDemo }] = useAppStore();
  const fn = isDemo ? getAssignmentLocal : getAssignmentGQL;

  return useQuery({
    queryKey: ['assignment', assignmentId],
    queryFn: () => fn({ id: assignmentId! }),
    select: (data) => data.Assignment!,
    enabled: !!assignmentId
  });
};
