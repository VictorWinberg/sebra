import { graphql } from '@/api/gql';
import { GetMeQuery } from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: (): Promise<GetMeQuery> =>
      requestGQL(
        graphql(`
          query GetMe {
            meUser {
              user {
                id
                email
              }
            }
          }
        `)
      )(),
    select: (data) => data.meUser?.user
  });
};
