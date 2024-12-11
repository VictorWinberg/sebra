import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { graphql } from '@/api/gql';
import { AuthLoginMutation, AuthLoginMutationVariables, AuthLogoutMutation } from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { deleteToken, saveToken } from '@/utils/token';

export const useAuthLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AuthLoginMutationVariables): Promise<AuthLoginMutation> =>
      requestGQL(
        graphql(`
          mutation AuthLogin($email: String!, $password: String!) {
            loginUser(email: $email, password: $password) {
              token
              user {
                id
                email
                workspaces {
                  id
                  name
                }
              }
            }
          }
        `)
      )(data),
    onSuccess: (data) => {
      const { token } = data.loginUser || {};
      if (token) {
        saveToken(token);
      }
      queryClient.clear();
    }
  });
};

export const useAuthLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (): Promise<AuthLogoutMutation> =>
      requestGQL(
        graphql(`
          mutation AuthLogout {
            logoutUser
          }
        `)
      )(),
    onSuccess: () => {
      deleteToken();
      queryClient.clear();
      navigate('/login');
    }
  });
};
