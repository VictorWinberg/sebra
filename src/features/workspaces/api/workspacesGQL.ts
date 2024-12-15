import { graphql } from '@/api/gql';
import { GetWorkspacesQuery } from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';

export const getWorkspacesGQL = (): Promise<GetWorkspacesQuery> =>
  requestGQL(
    graphql(`
      query GetWorkspaces {
        Workspaces {
          docs {
            id
            name
            slug
            createdAt
            updatedAt
          }
        }
      }
    `)
  )();
