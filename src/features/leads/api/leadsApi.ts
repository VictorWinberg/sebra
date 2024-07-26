import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import { Assignment } from '@/features/assignments/api/assignmentsApi';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';
import { pick, toMap } from '@/utils';

export const LEAD_STAGES = ['Intresse', 'Pitch', 'Affär', 'Uppföljning'];

export type Lead = {
  leadId: string;
  leadTitle: string;
  stage: string;
  rank: number;
  contactId: number;
  companyId: number;
  assignmentId: number;
  createdAt: string;
  updatedAt: string;
};

type LeadData = Lead & {
  contact?: Contact;
  company?: Company;
  assignment?: Assignment;
};

export const fetchLeads = async (): Promise<LeadData[]> => {
  const assignments = toMap(await query<Assignment>(`SELECT * FROM assignments`), 'assignmentId');
  const contacts = toMap(await query<Contact>(`SELECT * FROM contacts`), 'contactId');
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'companyId');
  const leads = await query<Lead>(`SELECT * FROM leads ORDER BY rank`);
  return leads.map(transformLead(assignments, contacts, companies));
};

export const createLead = async (lead: Partial<Lead>) => {
  return await insertQuery<Lead>(
    'leads',
    pick({ ...lead, leadId: uuidv4() }, [
      'leadId',
      'leadTitle',
      'stage',
      'rank',
      'contactId',
      'companyId',
      'assignmentId'
    ])
  );
};

export const updateLead = async (lead: Partial<Lead>) => {
  return await updateQuery<Lead>(
    'leads',
    pick(lead, ['leadTitle', 'stage', 'rank', 'contactId', 'companyId', 'assignmentId']),
    pick(lead, ['leadId'])
  );
};

export const deleteLead = async ({ leadId }: Pick<Lead, 'leadId'>) => {
  return await deleteQuery('leads', { leadId });
};

function transformLead(
  assignments: Map<string | number, Assignment>,
  contacts: Map<string | number, Contact>,
  companies: Map<string | number, Company>
): (value: Lead, index: number, array: Lead[]) => LeadData {
  return (lead) => {
    return {
      ...lead,
      assignment: assignments.get(lead.assignmentId),
      contact: contacts.get(lead.contactId),
      company: companies.get(lead.companyId)
    };
  };
}
