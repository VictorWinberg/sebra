import { deleteQuery, insertQuery, query, selectOneQuery, updateQuery } from '@/api/DummyDB';
import {
  Company,
  CreateCompanyMutation,
  CreateCompanyMutationVariables,
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables,
  GetCompaniesQuery,
  GetCompanyQuery,
  GetCompanyQueryVariables,
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
} from '@/api/gql/graphql';
import { AssertKeys, pick } from '@/utils';

type LocalCompany = {
  id: string;
  companyName: string;
  address?: string;
  industry?: string;
  email?: string;
  phone?: string;
  website?: string;
  organizationNumber?: string;
  createdAt: string;
  updatedAt: string;
};

export const verify: AssertKeys<LocalCompany, Omit<Company, '__typename'>> = true;

export const getCompaniesLocal = async (): Promise<GetCompaniesQuery> => {
  const companies = await query<Company>(`SELECT * FROM companies ORDER BY company_name`);
  return { Companies: { docs: companies } };
};

export const getCompanyLocal = async ({ id }: GetCompanyQueryVariables): Promise<GetCompanyQuery> => {
  const company = await selectOneQuery<Company>('companies', { id });
  return { Company: company };
};

export const createCompanyLocal = async ({ data }: CreateCompanyMutationVariables): Promise<CreateCompanyMutation> => {
  const company = await insertQuery<Company>(
    'companies',
    pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  );
  return { createCompany: company };
};

export const updateCompanyLocal = async ({
  id,
  data
}: UpdateCompanyMutationVariables): Promise<UpdateCompanyMutation> => {
  const company = await updateQuery<Company>(
    'companies',
    pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber']),
    { id }
  );
  return { updateCompany: company };
};

export const deleteCompanyLocal = async ({ id }: DeleteCompanyMutationVariables): Promise<DeleteCompanyMutation> => {
  const company = await deleteQuery<Company>('companies', { id });
  return { deleteCompany: company };
};
