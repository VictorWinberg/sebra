import { graphql } from '@/api/gql';
import {
  Contact,
  CreateContactMutation,
  DeleteContactMutation,
  GetContactQuery,
  GetContactQueryVariables,
  GetContactsQuery,
  UpdateContactMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getContactsGQL = (): Promise<GetContactsQuery> =>
  requestGQL(
    graphql(`
      query GetContacts {
        Contacts(sort: "contactName") {
          docs {
            id
            contactName
            email
            phone
            jobTitle
            address
            notes
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
          }
        }
      }
    `)
  )();

export const getContactGQL = ({ id }: GetContactQueryVariables): Promise<GetContactQuery> =>
  requestGQL(
    graphql(`
      query GetContact($id: String!) {
        Contact(id: $id) {
          id
          contactName
          email
          phone
          jobTitle
          address
          notes
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
        }
      }
    `)
  )({ id });

export const createContactGQL = (data: Contact): Promise<CreateContactMutation> =>
  requestGQL(
    graphql(`
      mutation CreateContact($data: mutationContactInput!) {
        createContact(data: $data) {
          id
        }
      }
    `)
  )({
    data: {
      ...pick(data, ['contactName', 'email', 'phone', 'jobTitle', 'address', 'notes']),
      company: data.company?.id ?? null
    }
  });

export const updateContactGQL = (data: Contact): Promise<UpdateContactMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {
        updateContact(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id: data.id,
    data: {
      ...pick(data, ['contactName', 'email', 'phone', 'jobTitle', 'address', 'notes']),
      company: data.company?.id ?? null
    }
  });

export const deleteContactGQL = (data: Contact): Promise<DeleteContactMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteContact($id: String!) {
        deleteContact(id: $id) {
          id
        }
      }
    `)
  )({ id: data.id });
