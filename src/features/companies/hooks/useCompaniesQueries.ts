import { useQuery } from '@tanstack/react-query';

import { fetchCompanies, fetchCompany } from '../api/companiesApi';

export const useCompanies = () => {
  return useQuery({ queryKey: ['companies'], queryFn: fetchCompanies });
};

export const useCompany = (companyId: string | undefined) => {
  return useQuery({
    queryKey: ['company', companyId],
    queryFn: () => fetchCompany(companyId!),
    enabled: !!companyId
  });
};
