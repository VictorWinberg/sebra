import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertManyQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import { Contact } from '@/features/contacts/api/contactsApi';
import { pick, toMap } from '@/utils';

export type Interaction = InteractionRecord & { contacts: Contact[] };

export type InteractionRecord = {
  interactionId: string;
  interactionDate: string;
  interactionType: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type InteractionContact = {
  interactionId: string;
  contactId: number;
};

export const fetchInteractions = async (where: { contactId: number }): Promise<Interaction[]> => {
  const interactionRecords = await query<InteractionRecord>(
    `SELECT * FROM interactions
     WHERE interaction_id IN (
       SELECT interaction_id FROM interaction_contacts
       WHERE contact_id = :contactId)`,
    where
  );
  const interactions: Interaction[] = interactionRecords.map((interaction) => ({ ...interaction, contacts: [] }));
  const interactionMap = toMap(interactions, 'interactionId');

  const contacts = await query<Contact>(`SELECT * FROM contacts`);
  const contactMap = toMap(contacts, 'contactId');

  const interactionContacts = await query<InteractionContact>('SELECT * FROM interaction_contacts');
  interactionContacts.forEach((interactionContact) => {
    const interaction = interactionMap.get(interactionContact.interactionId);
    const contact = contactMap.get(interactionContact.contactId);
    if (!interaction || !contact) {
      return;
    }
    interaction.contacts.push(contact);
  });

  return Array.from(interactionMap.values());
};

export const createInteraction = async (interaction: Interaction) => {
  const record = await insertQuery<InteractionRecord>(
    'interactions',
    pick({ ...interaction, interactionId: uuidv4() }, ['interactionId', 'interactionType', 'interactionDate', 'notes'])
  );
  await createInteractionContacts({ interactionId: record.interactionId, contacts: interaction.contacts });
};

export const updateInteraction = async (interaction: Interaction) => {
  await updateQuery<InteractionRecord>(
    'interactions',
    pick(interaction, ['interactionType', 'interactionDate', 'notes']),
    pick(interaction, ['interactionId'])
  );
  await updateInteractionContacts(interaction);
};

export const deleteInteraction = async (interaction: Pick<InteractionRecord, 'interactionId'>) => {
  await deleteInteractionContacts(interaction);
  await deleteQuery<InteractionRecord>('interactions', pick(interaction, ['interactionId']));
};

export const createInteractionContacts = async (interaction: Pick<Interaction, 'interactionId' | 'contacts'>) => {
  await insertManyQuery<InteractionContact>(
    'interaction_contacts',
    interaction.contacts.map(({ contactId }) => ({ interactionId: interaction.interactionId, contactId }))
  );
};

const updateInteractionContacts = async (interaction: Pick<Interaction, 'interactionId' | 'contacts'>) => {
  await deleteInteractionContacts(interaction);
  await createInteractionContacts(interaction);
};

const deleteInteractionContacts = async (interaction: Pick<InteractionRecord, 'interactionId'>) => {
  await deleteQuery<InteractionContact>('interaction_contacts', pick(interaction, ['interactionId']));
};
