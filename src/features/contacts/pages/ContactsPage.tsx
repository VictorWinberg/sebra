import { useNavigate } from 'react-router-dom';

// material-ui
import { Button } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
import { Contact } from '../api/contactsApi';
import ContactForm from '../components/ContactForm';
import { contactColumns } from '../config/ContactConfig';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContacts } from '../hooks/useContactsQueries';

// assets
import AddIcon from '@mui/icons-material/Add';

// ==============================|| CONTACTS PAGE ||============================== //

const ContactsPage = () => {
  const navigate = useNavigate();

  const { data = [], isLoading } = useContacts();
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <FlexGrow>
      <DataTable<Contact>
        data={data}
        columns={contactColumns}
        getRowId={(row) => `${row.id}`}
        state={{ isLoading }}
        onCreate={(row) => createContact(row, { onSuccess: (res) => navigate(`/home/contacts/${res.id}`) })}
        onUpdate={(row) => updateContact(row)}
        onDelete={(row) => deleteContact(row)}
        renderTopToolbarCustomActions={({ table }) => (
          <Button
            onClick={() => table.setCreatingRow(true)}
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till kontakt
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <SebraDialog
            table={table}
            row={row}
            titles={{ creating: 'Lägg till kontakt', editing: 'Redigera kontakt' }}
            FormComponent={ContactForm}
          />
        )}
      />
    </FlexGrow>
  );
};

export default ContactsPage;
