import { useQuery } from '@tanstack/react-query';

import { fetchAssignment, fetchAssignments } from '../api/assignmentsApi';

export const useAssignments = () => {
  return useQuery({ queryKey: ['assignments'], queryFn: fetchAssignments });
};

export const useAssignment = (assignmentId: number | undefined) => {
  return useQuery({
    queryKey: ['assignment', assignmentId],
    queryFn: () => fetchAssignment(assignmentId!),
    enabled: !!assignmentId
  });
};
