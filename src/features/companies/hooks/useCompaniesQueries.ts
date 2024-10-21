import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Company } from '@/api/gql/graphql';
import { useAppStore } from '@/store';
import { getCompaniesGQL, getCompanyGQL } from '../api/companiesGQL';
import { getCompaniesLocal, getCompanyLocal } from '../api/companiesLocal';

export const useCompanies = (): UseQueryResult<Company[], Error> => {
  const [{ isDemo }] = useAppStore();
  const fn = isDemo ? getCompaniesLocal : getCompaniesGQL;

  return useQuery({
    queryKey: ['companies'],
    queryFn: () => fn(),
    select: (data) => data.Companies?.docs?.filter((i) => !!i) || []
  });
};

export const useCompany = (companyId: string | undefined): UseQueryResult<Company, Error> => {
  const [{ isDemo }] = useAppStore();
  const fn = isDemo ? getCompanyLocal : getCompanyGQL;

  return useQuery({
    queryKey: ['company', companyId],
    queryFn: () => fn({ id: companyId! }),
    select: (data) => data.Company!,
    enabled: !!companyId
  });
};
