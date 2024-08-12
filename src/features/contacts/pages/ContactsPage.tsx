// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import ContactForm from '../components/ContactForm';
import { contactColumns, ContactData } from '../config/ContactConfig';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContacts } from '../hooks/useContactsQueries';

// assets
import AddIcon from '@mui/icons-material/Add';

// ==============================|| CONTACTS PAGE ||============================== //

const ContactsPage = () => {
  const { data = [], isLoading } = useContacts();
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <FlexGrow>
      <DataTable<ContactData>
        data={data}
        columns={contactColumns}
        getRowId={(row) => `${row.contactId}`}
        state={{ isLoading }}
        onCreate={(row) => createContact(row)}
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
          <>
            <DialogTitle variant="h4" color="primary">
              {table.getState().creatingRow ? 'Lägg till kontakt' : 'Redigera kontakt'}
            </DialogTitle>
            <DialogContent>
              <ContactForm
                sx={{ mt: 1 }}
                formProps={{ values: row.original }}
                onChange={(values) => {
                  //@ts-expect-error any
                  row._valuesCache = values;
                }}
              />
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons row={row} table={table} variant="text" />
            </DialogActions>
          </>
        )}
      />
    </FlexGrow>
  );
};

export default ContactsPage;
