import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, query, selectOneQuery, updateQuery } from '@/api/DummyDB';
import {
  Company,
  CreateCompanyMutation,
  DeleteCompanyMutation,
  GetCompaniesQuery,
  GetCompanyQuery,
  GetCompanyQueryVariables,
  UpdateCompanyMutation,
  Workspace
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
  workspace?: Workspace;
  createdAt: string;
  updatedAt: string;
};

export const verify: AssertKeys<LocalCompany, Omit<Company, '__typename'>> = true;

export type FlatCompany = Omit<Company, 'workspace'>;

export const getCompaniesLocal = async (): Promise<GetCompaniesQuery> => {
  const docs = await query<FlatCompany>(`SELECT * FROM companies ORDER BY company_name`);
  return { Companies: { docs } };
};

export const getCompanyLocal = async ({ id }: GetCompanyQueryVariables): Promise<GetCompanyQuery> => {
  return { Company: await selectOneQuery<FlatCompany>('companies', { id }) };
};

export const createCompanyLocal = async (data: Company): Promise<CreateCompanyMutation> => {
  const params = pick({ ...data, id: uuidv4() }, [
    'id',
    'companyName',
    'address',
    'industry',
    'phone',
    'email',
    'website',
    'organizationNumber'
  ]);
  return { createCompany: await insertQuery('companies', params) };
};

export const updateCompanyLocal = async ({ id, ...data }: Company): Promise<UpdateCompanyMutation> => {
  const params = pick(data, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber']);
  return { updateCompany: await updateQuery<FlatCompany>('companies', params, { id }) };
};

export const deleteCompanyLocal = async ({ id }: Company): Promise<DeleteCompanyMutation> => {
  return { deleteCompany: await deleteQuery<FlatCompany>('companies', { id }) };
};
