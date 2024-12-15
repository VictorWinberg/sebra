import { API_URL } from '@/config';
import { loadToken } from '@/utils/token';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(`${API_URL}/graphql`, {
  headers: () => {
    const token = loadToken('jwt');
    const workspace = loadToken('workspace');
    return {
      ...(token && { Authorization: `JWT ${token}` }),
      ...(workspace && { 'X-Payload-Workspace': workspace })
    };
  }
});

export const getQueryKey = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): [string, TVariables | undefined] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [(document.definitions[0] as any).name.value, variables];
};

export const requestGQL =
  <TResult, TVariables>(document: TypedDocumentNode<TResult, TVariables>) =>
  (variables?: TVariables): Promise<TResult> =>
    client.request(document, variables ?? undefined);

export interface GraphQLParams {
  enabled: boolean;
}
