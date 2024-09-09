import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertManyQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import { Contact } from '@/features/contacts/api/contactsApi';
import { pick, toMap } from '@/utils';

export type Interaction = InteractionRecord & { contacts: Contact[] };

export type InteractionRecord = {
  id: string;
  interactionDate: string;
  interactionType: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

type InteractionContact = {
  interactionId: string;
  contactId: string;
};

export const fetchInteractions = async (): Promise<Interaction[]> => {
  const interactionRecords = await query<InteractionRecord>(`SELECT * FROM interactions`);
  const interactions: Interaction[] = interactionRecords.map((interaction) => ({ ...interaction, contacts: [] }));
  const interactionMap = toMap(interactions, 'id');

  const contacts = await query<Contact>(`SELECT * FROM contacts`);
  const contactMap = toMap(contacts, 'id');

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
    pick({ ...interaction, interactionId: uuidv4() }, ['id', 'interactionType', 'interactionDate', 'notes'])
  );
  await createInteractionContacts({ id: record.id, contacts: interaction.contacts });
};

export const updateInteraction = async (interaction: Interaction) => {
  await updateQuery<InteractionRecord>(
    'interactions',
    pick(interaction, ['interactionType', 'interactionDate', 'notes']),
    pick(interaction, ['id'])
  );
  await updateInteractionContacts(interaction);
};

export const deleteInteraction = async (interaction: Pick<InteractionRecord, 'id'>) => {
  await deleteInteractionContacts(interaction);
  await deleteQuery<InteractionRecord>('interactions', pick(interaction, ['id']));
};

export const createInteractionContacts = async (interaction: Pick<Interaction, 'id' | 'contacts'>) => {
  await insertManyQuery<InteractionContact>(
    'interaction_contacts',
    interaction.contacts.map(({ id: contactId }) => ({ interactionId: interaction.id, contactId }))
  );
};

const updateInteractionContacts = async (interaction: Pick<Interaction, 'id' | 'contacts'>) => {
  await deleteInteractionContacts(interaction);
  await createInteractionContacts(interaction);
};

const deleteInteractionContacts = async ({ id }: Pick<InteractionRecord, 'id'>) => {
  await deleteQuery<InteractionContact>('interaction_contacts', { interactionId: id });
};
