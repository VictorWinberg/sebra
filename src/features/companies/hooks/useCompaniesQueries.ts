import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Company } from '@/api/gql/graphql';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { getCompaniesGQL, getCompanyGQL } from '../api/companiesGQL';
import { getCompaniesLocal, getCompanyLocal } from '../api/companiesLocal';

export const useCompanies = (): UseQueryResult<Company[], Error> => {
  const { data: user } = useAuth();
  const fn = user ? getCompaniesGQL : getCompaniesLocal;

  return useQuery({
    queryKey: ['companies'],
    queryFn: () => fn(),
    select: (data) => data.Companies?.docs?.filter((i) => !!i) || []
  });
};

export const useCompany = (companyId: string | undefined): UseQueryResult<Company, Error> => {
  const { data: user } = useAuth();
  const fn = user ? getCompanyGQL : getCompanyLocal;

  return useQuery({
    queryKey: ['company', companyId],
    queryFn: () => fn({ id: companyId! }),
    select: (data) => data.Company!
  });
};
