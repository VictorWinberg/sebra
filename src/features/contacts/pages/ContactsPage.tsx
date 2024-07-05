import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { toLocalTime } from '@/utils';
import { fetchContacts } from '../api/contactsApi';
import ContactForm from '../components/ContactForm';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContacts } from '../hooks/useContactsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

type DataType = Awaited<ReturnType<typeof fetchContacts>>[number];
const columns: MRT_ColumnDef<DataType>[] = [
  {
    accessorKey: 'contactName',
    header: 'Namn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/dashboard/contacts/${row.original.contactId}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
    accessorKey: 'email',
    header: 'Email',
    Cell: ({ cell }) => <Link href={`mailto:${cell.getValue<string>()}`}>{cell.getValue<string>()}</Link>
  },
  { accessorKey: 'jobTitle', header: 'Jobbtitel' },
  {
    accessorFn: (row) => row.company?.companyName,
    header: 'Företagsnamn',
    filterVariant: 'multi-select',
    enableEditing: false
  },
  { accessorKey: 'phone', header: 'Telefonnummer' },
  {
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => toLocalTime(cell.getValue<Dayjs>()).format('YYYY-MM-DD HH:mm')
  }
];

const ContactsPage = () => {
  const { data = [], isLoading } = useContacts();
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <FlexGrow>
      <DataTable<DataType>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.contactId}`}
        state={{ isLoading }}
        onCreate={(row) => createContact(row)}
        onUpdate={(row) => updateContact(row)}
        onDelete={(row) => deleteContact(row)}
        renderTopToolbarCustomActions={() => (
          <Button
            component={RouterLink}
            to="new"
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till kontakt
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera kontakt
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
