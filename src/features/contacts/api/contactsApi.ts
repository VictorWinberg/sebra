import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, query, insertQuery, updateQuery, selectOneQuery } from '@/api/DummyDB';
import { pick, toMap } from '@/utils';
import { Company } from '@/api/gql/graphql';

export type Contact = ContactRecord & { company?: Company };

export type ContactRecord = {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyId: string;
  position: string;
  address: string;
  notes: string;
  lastInteractionDate: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchContacts = async (): Promise<Contact[]> => {
  const contacts = await query<Contact>(`SELECT * FROM contacts ORDER BY contact_name`);
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'id');

  return contacts.map((contact) => ({ ...contact, company: companies.get(contact.companyId) }));
};

export const fetchContact = async (id: string) => {
  return await selectOneQuery<ContactRecord>('contacts', { id });
};

export const createContact = async (contact: Partial<Contact>) => {
  return await insertQuery<ContactRecord>(
    'contacts',
    pick({ ...contact, id: uuidv4() }, [
      'id',
      'contactName',
      'email',
      'phone',
      'jobTitle',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ])
  );
};

export const updateContact = async (contact: Partial<Contact>) => {
  return await updateQuery<ContactRecord>(
    'contacts',
    pick(contact, [
      'contactName',
      'email',
      'phone',
      'jobTitle',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ]),
    pick(contact, ['id'])
  );
};

export const deleteContact = async ({ id }: Pick<Contact, 'id'>) => {
  return await deleteQuery<ContactRecord>('contacts', { id });
};
