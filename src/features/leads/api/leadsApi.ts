import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import { Company, Contact } from '@/api/gql/graphql';
import { Assignment } from '@/features/assignments/api/assignmentsApi';
import { pick, toMap } from '@/utils';

export const LEAD_STAGES = ['Intresse', 'Pitch', 'Affär', 'Uppföljning'];

export type Lead = LeadRecord & {
  contact?: Contact;
  company?: Company;
  assignment?: Assignment;
};

export type LeadRecord = {
  id: string;
  leadTitle: string;
  description: string;
  stage: string;
  rank: number;
  contactId: string;
  companyId: string;
  assignmentId: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchLeads = async (): Promise<Lead[]> => {
  const assignments = toMap(await query<Assignment>(`SELECT * FROM assignments`), 'id');
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'id');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'id');
  const leads = await query<Lead>(`SELECT * FROM leads ORDER BY rank`);
  return leads.map(transformLead(assignments, contacts, companies));
};

export const createLead = async (lead: Partial<Lead>) => {
  return await insertQuery<LeadRecord>(
    'leads',
    pick({ ...lead, id: uuidv4() }, [
      'id',
      'leadTitle',
      'description',
      'stage',
      'rank',
      'contactId',
      'companyId',
      'assignmentId'
    ])
  );
};

export const updateLead = async (lead: Partial<Lead>) => {
  return await updateQuery<LeadRecord>(
    'leads',
    pick(lead, ['leadTitle', 'description', 'stage', 'rank', 'contactId', 'companyId', 'assignmentId']),
    pick(lead, ['id'])
  );
};

export const deleteLead = async ({ id }: Pick<Lead, 'id'>) => {
  return await deleteQuery('leads', { id });
};

function transformLead(
  assignments: Map<string | number, Assignment>,
  contacts: Map<string | number, Contact>,
  companies: Map<string | number, Company>
): (value: LeadRecord) => Lead {
  return (lead) => {
    return {
      ...lead,
      assignment: assignments.get(lead.assignmentId),
      contact: contacts.get(lead.contactId),
      company: companies.get(lead.companyId)
    };
  };
}
