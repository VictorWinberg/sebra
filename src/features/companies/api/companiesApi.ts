import { deleteQuery, query, insertQuery, updateQuery, selectOneQuery } from '@/api/DummyDB';
import { pick } from '@/utils';

export type Company = {
  id: string;
  companyName: string;
  address: string;
  industry: string;
  phone: string;
  email: string;
  website: string;
  organizationNumber: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchCompanies = async () => {
  return await query<Company>(`SELECT * FROM companies ORDER BY company_name`);
};

export const fetchCompany = async (id: string) => {
  return await selectOneQuery<Company>('companies', { id });
};

export const createCompany = async (company: Partial<Company>) => {
  return await insertQuery<Company>(
    'companies',
    pick(company, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber'])
  );
};

export const updateCompany = async (company: Partial<Company>) => {
  return await updateQuery<Company>(
    'companies',
    pick(company, ['companyName', 'address', 'industry', 'phone', 'email', 'website', 'organizationNumber']),
    pick(company, ['id'])
  );
};

export const deleteCompany = async ({ id }: Pick<Company, 'id'>) => {
  return await deleteQuery<Company>('companies', { id });
};
