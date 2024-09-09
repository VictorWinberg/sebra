import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import SebraDialog from '@/ui-component/SebraDialog';
import { Contact } from '../api/contactsApi';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import ContactForm from './ContactForm';

interface ContactTableProps {
  contacts: Contact[];
  isLoading: boolean;
  defaultValues?: Partial<Contact>;
}

const ContactTable = ({ contacts, isLoading, defaultValues }: ContactTableProps) => {
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <DataTable
      data={contacts}
      getRowId={(row) => `${row.id}`}
      state={{ isLoading }}
      columns={[
        {
          accessorKey: 'contactName',
          header: 'Namn',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/home/contacts/${row.original.id}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'jobTitle', header: 'Jobbtitel' },
        { accessorKey: 'phone', header: 'Telefonnummer' }
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <SebraDialog
          table={table}
          row={row}
          titles={{ creating: 'Lägg till kontakt', editing: 'Redigera kontakt' }}
          FormComponent={ContactForm}
          defaultValues={defaultValues}
        />
      )}
      onCreate={(row) => createContact(row)}
      onUpdate={(row) => updateContact(row)}
      onDelete={(row) => deleteContact(row)}
    />
  );
};

export default ContactTable;
