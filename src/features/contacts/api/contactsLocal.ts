import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, query, selectOneQuery, updateQuery } from '@/api/DummyDB';
import {
  Company,
  Contact,
  CreateContactMutation,
  DeleteContactMutation,
  GetContactQuery,
  GetContactQueryVariables,
  GetContactsQuery,
  UpdateContactMutation,
  Workspace
} from '@/api/gql/graphql';
import { FlatCompany } from '@/features/companies/api/companiesLocal';
import { AssertKeys, pick, toMap } from '@/utils';

type LocalContact = {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company?: Company;
  address: string;
  notes: string;
  workspace?: Workspace;
  createdAt: string;
  updatedAt: string;
};

export const verify: AssertKeys<LocalContact, Omit<Contact, '__typename'>> = true;

export type FlatContact = Omit<Contact, 'company' | 'workspace'> & { company?: string };

export const getContactsLocal = async (): Promise<GetContactsQuery> => {
  const contacts = await query<FlatContact>(`SELECT * FROM contacts ORDER BY contact_name`);
  const companies = toMap(await query<FlatCompany>(`SELECT * FROM companies`), 'id');
  const docs = contacts.map((contact) => ({ ...contact, company: companies.get(contact.company || '') }));
  return { Contacts: { docs } };
};

export const getContactLocal = async ({ id }: GetContactQueryVariables): Promise<GetContactQuery> => {
  const contact = await selectOneQuery<FlatContact>('contacts', { id });
  const company = await selectOneQuery<FlatCompany>('companies', { id: contact.company });
  return { Contact: { ...contact, company } };
};

export const createContactLocal = async (data: Contact): Promise<CreateContactMutation> => {
  const params = pick({ ...data, id: uuidv4(), company: data.company?.id }, [
    'id',
    'contactName',
    'email',
    'phone',
    'jobTitle',
    'company',
    'address',
    'notes'
  ]);
  return { createContact: await insertQuery<FlatContact>('contacts', params) };
};

export const updateContactLocal = async ({ id, ...data }: Contact): Promise<UpdateContactMutation> => {
  const params = pick({ ...data, company: data.company?.id }, [
    'contactName',
    'email',
    'phone',
    'jobTitle',
    'company',
    'address',
    'notes'
  ]);
  return { updateContact: await updateQuery<FlatContact>('contacts', params, { id }) };
};

export const deleteContactLocal = async ({ id }: Contact): Promise<DeleteContactMutation> => {
  return { deleteContact: await deleteQuery<FlatContact>('contacts', { id }) };
};
