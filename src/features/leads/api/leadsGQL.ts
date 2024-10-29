import { graphql } from '@/api/gql';
import {
  Lead,
  CreateLeadMutation,
  DeleteLeadMutation,
  GetLeadQuery,
  GetLeadQueryVariables,
  GetLeadsQuery,
  UpdateLeadMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getLeadsGQL = (): Promise<GetLeadsQuery> =>
  requestGQL(
    graphql(`
      query GetLeads {
        Leads(sort: "rank") {
          docs {
            id
            leadTitle
            description
            stage
            rank
            createdAt
            updatedAt

            company {
              id
              companyName
              address
              industry
              phone
              email
              website
              organizationNumber
              createdAt
              updatedAt
            }

            contact {
              id
              contactName
              email
              phone
              jobTitle
              address
              notes
              createdAt
              updatedAt
            }

            assignment {
              id
              assignmentName
              fee
              status
              type
              createdAt
              updatedAt
            }
          }
        }
      }
    `)
  )();

export const getLeadGQL = (data: GetLeadQueryVariables): Promise<GetLeadQuery> =>
  requestGQL(
    graphql(`
      query GetLead($id: String!) {
        Lead(id: $id) {
          id
          leadTitle
          description
          stage
          rank
          createdAt
          updatedAt

          company {
            id
            companyName
            address
            industry
            phone
            email
            website
            organizationNumber
            createdAt
            updatedAt
          }

          contact {
            id
            contactName
            email
            phone
            jobTitle
            address
            notes
            createdAt
            updatedAt
          }

          assignment {
            id
            assignmentName
            fee
            status
            type
            createdAt
            updatedAt
          }
        }
      }
    `)
  )({ id: data.id });

export const createLeadGQL = (data: Lead): Promise<CreateLeadMutation> =>
  requestGQL(
    graphql(`
      mutation CreateLead($data: mutationLeadInput!) {
        createLead(data: $data) {
          id
        }
      }
    `)
  )({
    data: pick(
      {
        ...data,
        company: data.company?.id,
        contact: data.contact?.id,
        assignment: data.assignment?.id
      },
      ['leadTitle', 'description', 'stage', 'rank', 'company', 'contact', 'assignment']
    )
  });

export const updateLeadGQL = ({ id, ...data }: Lead): Promise<UpdateLeadMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateLead($id: String!, $data: mutationLeadUpdateInput!) {
        updateLead(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id,
    data: pick(
      {
        ...data,
        company: data.company?.id,
        contact: data.contact?.id,
        assignment: data.assignment?.id
      },
      ['leadTitle', 'description', 'stage', 'rank', 'company', 'contact', 'assignment']
    )
  });

export const deleteLeadGQL = ({ id }: Lead): Promise<DeleteLeadMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteLead($id: String!) {
        deleteLead(id: $id) {
          id
        }
      }
    `)
  )({ id });
