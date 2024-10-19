import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import {
  Assignment,
  Company,
  Contact,
  CreateLeadMutation,
  DeleteLeadMutation,
  GetLeadsQuery,
  Lead,
  UpdateLeadMutation
} from '@/api/gql/graphql';
import { AssertKeys, pick, toMap } from '@/utils';

// TODO: Store in DB?
export const LEAD_STAGES = ['Intresse', 'Pitch', 'Affär', 'Uppföljning'];

type LocalLead = {
  id: string;
  leadTitle: string;
  description: string;
  stage: string;
  rank: number;
  contact: string;
  company: string;
  assignment: string;
  createdAt: string;
  updatedAt: string;
};

export const verify: AssertKeys<LocalLead, Omit<Lead, '__typename'>> = true;

type FlatLead = Omit<Lead, 'contact' | 'company' | 'assignment'> & {
  contact?: string;
  company?: string;
  assignment?: string;
};

export const getLeadsLocal = async (): Promise<GetLeadsQuery> => {
  const assignments = toMap(await query<Assignment>(`SELECT * FROM assignments`), 'id');
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'id');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'id');
  const leads = await query<FlatLead>(`SELECT * FROM leads ORDER BY rank`);
  const docs = leads.map(transformFlatLead(assignments, contacts, companies));
  return { Leads: { docs } };
};

export const createLeadLocal = async (data: Lead): Promise<CreateLeadMutation> => {
  const params = pick(
    { ...data, id: uuidv4(), contact: data.contact?.id, company: data.company?.id, assignment: data.assignment?.id },
    ['id', 'leadTitle', 'description', 'stage', 'rank', 'contact', 'company', 'assignment']
  );
  const lead = await insertQuery<FlatLead>('leads', params);
  return { createLead: lead };
};

export const updateLeadLocal = async (data: Lead): Promise<UpdateLeadMutation> => {
  const params = pick(
    { ...data, contact: data.contact?.id, company: data.company?.id, assignment: data.assignment?.id },
    ['id', 'leadTitle', 'description', 'stage', 'rank', 'contact', 'company', 'assignment']
  );
  const lead = await updateQuery<FlatLead>('leads', params, pick(data, ['id']));
  return { updateLead: lead };
};

export const deleteLeadLocal = async ({ id }: Pick<Lead, 'id'>): Promise<DeleteLeadMutation> => {
  await deleteQuery('leads', { id });
  return { deleteLead: { id } };
};

function transformFlatLead(
  assignments: Map<string | number, Assignment>,
  contacts: Map<string | number, Contact>,
  companies: Map<string | number, Company>
): (value: FlatLead) => Lead {
  return (lead) => {
    return {
      ...lead,
      assignment: assignments.get(lead.assignment || ''),
      contact: contacts.get(lead.contact || ''),
      company: companies.get(lead.company || '')
    };
  };
}
