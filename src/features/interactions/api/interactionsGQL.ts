import { graphql } from '@/api/gql';
import {
  Interaction,
  CreateInteractionMutation,
  DeleteInteractionMutation,
  GetInteractionQuery,
  GetInteractionQueryVariables,
  GetInteractionsQuery,
  UpdateInteractionMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getInteractionsGQL = (): Promise<GetInteractionsQuery> =>
  requestGQL(
    graphql(`
      query GetInteractions {
        Interactions(sort: "interactionDate:desc") {
          docs {
            id
            interactionType
            interactionDate
            notes
            createdAt
            updatedAt

            contacts {
              id
              contactName
              email
              phone
              jobTitle
              address
              createdAt
              updatedAt
            }
          }
        }
      }
    `)
  )();

export const getInteractionGQL = ({ id }: GetInteractionQueryVariables): Promise<GetInteractionQuery> =>
  requestGQL(
    graphql(`
      query GetInteraction($id: String!) {
        Interaction(id: $id) {
          id
          interactionType
          interactionDate
          notes
          createdAt
          updatedAt

          contacts {
            id
            contactName
            email
            phone
            jobTitle
            address
            createdAt
            updatedAt
          }
        }
      }
    `)
  )({ id });

export const createInteractionGQL = (data: Interaction): Promise<CreateInteractionMutation> =>
  requestGQL(
    graphql(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `)
  )({
    data: pick({ ...data, contacts: (data.contacts || []).map((c) => c.id) }, [
      'interactionType',
      'interactionDate',
      'notes',
      'contacts'
    ])
  });

export const updateInteractionGQL = (data: Interaction): Promise<UpdateInteractionMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id: data.id,
    data: pick({ ...data, contacts: (data.contacts || []).map((c) => c.id) }, [
      'interactionType',
      'interactionDate',
      'notes',
      'contacts'
    ])
  });

export const deleteInteractionGQL = (data: Interaction): Promise<DeleteInteractionMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `)
  )({ id: data.id });
