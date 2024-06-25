import {
  deleteParameterizedQuery,
  query,
  insertParameterizedQuery,
  updateParameterizedQuery,
  selectParameterizedQuery
} from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { pick, toMap } from '@/utils';

export type Contact = {
  contactId: number;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyId: number;
  position: string;
  address: string;
  notes: string;
  lastInteractionDate: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchContacts = async () => {
  const contacts = await query<Contact>(`SELECT * FROM contacts`);
  const companies = await query<Company>(`SELECT * FROM companies`);
  const companyMap = toMap(companies, 'companyId');

  return contacts.map((contact) => ({ ...contact, company: companyMap.get(contact.contactId) }));
};

export const fetchContact = async (contactId: number) => {
  return await selectParameterizedQuery<Contact>('contacts', { contactId });
};

export const createContact = async (contact: Partial<Contact>) => {
  await insertParameterizedQuery<Contact>(
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
    ])
  );
};

export const updateContact = async (contact: Partial<Contact>) => {
  await updateParameterizedQuery<Contact>(
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
    pick(contact, ['contactId'])
  );
};

export const deleteContact = async ({ contactId }: Pick<Contact, 'contactId'>) => {
  await deleteParameterizedQuery<Contact>('contacts', { contactId });
};
