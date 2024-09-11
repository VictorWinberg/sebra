import { graphql } from '@/api/gql';
import {
  Company,
  CreateCompanyMutation,
  DeleteCompanyMutation,
  GetCompaniesQuery,
  GetCompanyQuery,
  GetCompanyQueryVariables,
  UpdateCompanyMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getCompaniesGQL = (): Promise<GetCompaniesQuery> =>
  requestGQL(
    graphql(`
      query GetCompanies {
        Companies(sort: "companyName") {
          docs {
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
  )();

export const getCompanyGQL = (data: GetCompanyQueryVariables): Promise<GetCompanyQuery> =>
  requestGQL(
    graphql(`
      query GetCompany($id: String!) {
        Company(id: $id) {
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
    `)
  )({ id: data.id });

export const createCompanyGQL = (data: Company): Promise<CreateCompanyMutation> =>
  requestGQL(
    graphql(`
      mutation CreateCompany($data: mutationCompanyInput!) {
        createCompany(data: $data) {
          id
        }
      }
    `)
  )({
    data: pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  });

export const updateCompanyGQL = ({ id, ...data }: Company): Promise<UpdateCompanyMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
        updateCompany(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id,
    data: pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  });

export const deleteCompanyGQL = ({ id }: Company): Promise<DeleteCompanyMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `)
  )({ id });
