import { graphql } from '@/api/gql';
import { useGraphQLMutation } from '@/hooks/useGraphQL';
import { useQueryClient } from '@tanstack/react-query';

export const useAuthLogin = () => {
  const queryClient = useQueryClient();

  return useGraphQLMutation(
    graphql(`
      mutation AuthLogin($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
          token
          user {
            id
            email
          }
        }
      }
    `),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [] });
      }
    }
  );
};

export const useAuthLogout = () => {
  const queryClient = useQueryClient();

  return useGraphQLMutation(
    graphql(`
      mutation AuthLogout {
        logoutUser
      }
    `),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [] });
      }
    }
  );
};
