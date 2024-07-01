import { useQuery } from '@tanstack/react-query';

import { fetchContact, fetchContacts } from '../api/contactsApi';

export const useContacts = () => {
  return useQuery({ queryKey: ['contacts'], queryFn: fetchContacts });
};

export const useContact = (contactId: number | undefined) => {
  return useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => fetchContact(contactId!),
    enabled: !!contactId
  });
};
