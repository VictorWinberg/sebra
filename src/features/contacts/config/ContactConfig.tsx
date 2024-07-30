import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { formatDate, toLocalTime } from '@/utils';
import { fetchContacts } from '../api/contactsApi';

// ==============================|| CONTACT CONFIG ||============================== //

export type ContactData = Awaited<ReturnType<typeof fetchContacts>>[number];
export const contactColumns: MRT_ColumnDef<ContactData>[] = [
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
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
