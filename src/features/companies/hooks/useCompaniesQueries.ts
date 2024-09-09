import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useGraphQL } from '@/hooks/useGraphQL';
import { fetchCompanies, fetchCompany } from '../api/companiesApi';
import { companiesQuery, transformCompany } from '../api/companiesGql';
import { localStorageGet } from '@/utils';
import { Company } from '@/api/gql/graphql';

export const useCompanies: () => UseQueryResult<Company[], Error> = () => {
  const isLocal = localStorageGet('local');
  const query = useQuery({ queryKey: ['companies'], queryFn: fetchCompanies });
  const graphql = useGraphQL(companiesQuery, {}, { select: transformCompany });
  return isLocal ? query : graphql;
};

export const useCompany = (companyId: string | undefined) => {
  return useQuery({
    queryKey: ['company', companyId],
    queryFn: () => fetchCompany(companyId!),
    enabled: !!companyId
  });
};
