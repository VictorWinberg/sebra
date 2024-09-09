import { graphql } from '@/api/gql';
import { Company, GetCompaniesQuery } from '@/api/gql/graphql';

export const companiesQuery = graphql(`
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
`);

export const transformCompany = (data: GetCompaniesQuery): Company[] => {
  return (data.Companies?.docs || []).filter((i) => !!i);
};
