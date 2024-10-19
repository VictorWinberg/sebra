import { API_URL } from '@/config';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query';
import request from 'graphql-request';

export const getQueryKey = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): [string, TVariables | undefined] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [(document.definitions[0] as any).name.value, variables];
};

export const useGraphQL = <TResult, TVariables, TTransformed = TResult>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
  options?: Omit<UseQueryOptions<TResult, Error, TTransformed>, 'queryKey' | 'queryFn'>
): UseQueryResult<TTransformed, Error> => {
  return useQuery({
    queryKey: getQueryKey<TResult, TVariables>(document, variables),
    queryFn: () => request(`${API_URL}graphql`, document, variables ?? undefined),
    ...options
  });
};

export const useGraphQLMutation = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  options?: UseMutationOptions<TResult, Error, TVariables>
): UseMutationResult<TResult, Error, TVariables> => {
  return useMutation({
    mutationFn: async (variables: TVariables) => request(`${API_URL}graphql`, document, variables ?? undefined),
    ...options
  });
};

export const requestGQL =
  <TResult, TVariables>(document: TypedDocumentNode<TResult, TVariables>) =>
  (variables?: TVariables): Promise<TResult> =>
    request(`${API_URL}graphql`, document, variables ?? undefined);

export interface GraphQLParams {
  enabled: boolean;
}