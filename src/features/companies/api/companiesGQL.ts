import { graphql } from '@/api/gql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getCompaniesGQL = requestGQL(
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
);

export const getCompanyGQL = requestGQL(
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
  `),
  ({ id }) => ({ id })
);

export const createCompanyGQL = requestGQL(
  graphql(`
    mutation CreateCompany($data: mutationCompanyInput!) {
      createCompany(data: $data) {
        id
      }
    }
  `),
  ({ data }) => ({
    data: pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  })
);

export const updateCompanyGQL = requestGQL(
  graphql(`
    mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
      updateCompany(id: $id, data: $data) {
        id
      }
    }
  `),
  ({ id, data }) => ({
    id,
    data: pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  })
);

export const deleteCompanyGQL = requestGQL(
  graphql(`
    mutation DeleteCompany($id: String!) {
      deleteCompany(id: $id) {
        id
      }
    }
  `),
  ({ id }) => ({ id })
);
