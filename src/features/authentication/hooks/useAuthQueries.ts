import { graphql } from '@/api/gql';
import { GetMeQuery } from '@/api/gql/graphql';
import { LOCAL_MODE } from '@/config';
import { requestGQL } from '@/hooks/useGraphQL';
import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    enabled: !LOCAL_MODE,
    queryFn: (): Promise<GetMeQuery> =>
      requestGQL(
        graphql(`
          query GetMe {
            meUser {
              user {
                id
                email
                workspaces {
                  id
                  name
                  slug
                }
                roles
              }
            }
          }
        `)
      )(),
    select: (data) => data.meUser?.user
  });
};
