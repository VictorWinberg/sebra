import { useQuery } from '@tanstack/react-query';

import { fetchAssignment, fetchAssignments, fetchAssignmentStatuses } from '../api/assignmentsApi';

export const useAssignments = () => {
  return useQuery({ queryKey: ['assignments'], queryFn: fetchAssignments });
};

export const useAssignment = (assignmentId: string | undefined) => {
  return useQuery({
    queryKey: ['assignment', assignmentId],
    queryFn: () => fetchAssignment(assignmentId!),
    enabled: !!assignmentId
  });
};

export const useAssignmentStatuses = () => {
  return useQuery({ queryKey: ['assignmentStatuses'], queryFn: fetchAssignmentStatuses });
};
