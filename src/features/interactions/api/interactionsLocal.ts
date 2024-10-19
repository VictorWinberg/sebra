import { v4 as uuidv4 } from 'uuid';

import { deleteQuery, insertManyQuery, insertQuery, query, updateQuery } from '@/api/DummyDB';
import { AssertKeys, pick, toMap } from '@/utils';
import {
  Contact,
  CreateInteractionMutation,
  DeleteInteractionMutation,
  GetInteractionsQuery,
  Interaction,
  UpdateInteractionMutation
} from '@/api/gql/graphql';

type LocalInteraction = {
  id: string;
  interactionDate: string;
  interactionType: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  contacts: Contact[];
};

type InteractionContact = {
  interactionId: string;
  contactId: string;
};

export const verify: AssertKeys<LocalInteraction, Omit<Interaction, '__typename'>> = true;

type FlatInteraction = Omit<Interaction, 'contacts'>;

export const getInteractionsLocal = async (): Promise<GetInteractionsQuery> => {
  const interactionRecords = await query<FlatInteraction>(`SELECT * FROM interactions`);
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
    (interaction.contacts = interaction.contacts || []).push(contact);
  });

  const docs = Array.from(interactionMap.values());

  return { Interactions: { docs } };
};

export const createInteractionLocal = async (data: Interaction): Promise<CreateInteractionMutation> => {
  const interaction = await insertQuery<FlatInteraction>(
    'interactions',
    pick({ ...data, interactionId: uuidv4() }, ['id', 'interactionType', 'interactionDate', 'notes'])
  );
  await createInteractionContacts({ id: interaction.id, contacts: data.contacts });

  return { createInteraction: interaction };
};

export const updateInteractionLocal = async (data: Interaction): Promise<UpdateInteractionMutation> => {
  const interaction = await updateQuery<FlatInteraction>(
    'interactions',
    pick(data, ['interactionType', 'interactionDate', 'notes']),
    pick(data, ['id'])
  );
  await updateInteractionContacts(data);

  return { updateInteraction: interaction };
};

export const deleteInteractionLocal = async ({ id }: Pick<Interaction, 'id'>): Promise<DeleteInteractionMutation> => {
  await deleteInteractionContacts({ id });
  await deleteQuery<FlatInteraction>('interactions', { id });
  return { deleteInteraction: { id } };
};

const createInteractionContacts = async (interaction: Pick<Interaction, 'id' | 'contacts'>) => {
  await insertManyQuery<InteractionContact>(
    'interaction_contacts',
    (interaction.contacts || []).map(({ id: contactId }) => ({ interactionId: interaction.id, contactId }))
  );
};

const updateInteractionContacts = async (interaction: Pick<Interaction, 'id' | 'contacts'>) => {
  await deleteInteractionContacts(interaction);
  await createInteractionContacts(interaction);
};

const deleteInteractionContacts = async ({ id }: Pick<Interaction, 'id'>) => {
  await deleteQuery<InteractionContact>('interaction_contacts', { interactionId: id });
};
