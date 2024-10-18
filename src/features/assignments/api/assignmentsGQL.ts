import { graphql } from '@/api/gql';
import {
  Assignment,
  CreateAssignmentMutation,
  DeleteAssignmentMutation,
  GetAssignmentQuery,
  GetAssignmentQueryVariables,
  GetAssignmentsQuery,
  UpdateAssignmentMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getAssignmentsGQL = (): Promise<GetAssignmentsQuery> =>
  requestGQL(
    graphql(`
      query GetAssignments {
        Assignments(sort: "assignmentName") {
          docs {
            id
            assignmentName
            fee
            status
            type
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

            externalContact {
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

            responsibleContacts {
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

export const getAssignmentGQL = (data: GetAssignmentQueryVariables): Promise<GetAssignmentQuery> =>
  requestGQL(
    graphql(`
      query GetAssignment($id: String!) {
        Assignment(id: $id) {
          id
          assignmentName
          fee
          status
          type
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

          externalContact {
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

          responsibleContacts {
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
  )({ id: data.id });

export const createAssignmentGQL = (data: Assignment): Promise<CreateAssignmentMutation> =>
  requestGQL(
    graphql(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `)
  )({
    data: pick(
      {
        ...data,
        externalContact: data.externalContact?.id,
        company: data.company?.id,
        responsibleContacts: (data.responsibleContacts || []).map((c) => c.id)
      },
      ['assignmentName', 'fee', 'status', 'type', 'externalContact', 'company', 'responsibleContacts']
    )
  });

export const updateAssignmentGQL = ({ id, ...data }: Assignment): Promise<UpdateAssignmentMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id,
    data: pick(
      {
        ...data,
        externalContact: data.externalContact?.id,
        company: data.company?.id,
        responsibleContacts: (data.responsibleContacts || []).map((c) => c.id)
      },
      ['assignmentName', 'fee', 'status', 'type', 'externalContact', 'company', 'responsibleContacts']
    )
  });

export const deleteAssignmentGQL = ({ id }: Assignment): Promise<DeleteAssignmentMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `)
  )({ id });
