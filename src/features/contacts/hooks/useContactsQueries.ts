import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getContactLocal, getContactsLocal } from '../api/contactsLocal';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { getContactGQL, getContactsGQL } from '../api/contactsGQL';
import { Contact } from '@/api/gql/graphql';

export const useContacts = (): UseQueryResult<Contact[], Error> => {
  const { data: user } = useAuth();
  const fn = user ? getContactsGQL : getContactsLocal;
  return useQuery({
    queryKey: ['contacts'],
    queryFn: () => fn(),
    select: (data) => data.Contacts?.docs?.filter((i) => !!i) || []
  });
};

export const useContact = (contactId: string | undefined): UseQueryResult<Contact, Error> => {
  const { data: user } = useAuth();
  const fn = user ? getContactGQL : getContactLocal;

  return useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => fn({ id: contactId! }),
    select: (data) => data.Contact!,
    enabled: !!contactId
  });
};
