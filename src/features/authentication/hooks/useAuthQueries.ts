import { graphql } from '@/api/gql';
import { useGraphQL } from '@/hooks/useGraphQL';

export const useAuth = () =>
  useGraphQL(
    graphql(`
      query GetMe {
        meUser {
          user {
            id
            email
          }
        }
      }
    `),
    {},
    { select: (data) => data.meUser?.user }
  );
