import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { formatDate, toLocalTime } from '@/utils';
import { Contact } from '../api/contactsApi';

// ==============================|| CONTACT CONFIG ||============================== //

export const contactColumns: MRT_ColumnDef<Contact>[] = [
  {
    accessorKey: 'contactName',
    header: 'Namn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/home/contacts/${row.original.id}`}>
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
    accessorKey: 'companyName',
    accessorFn: (row) => row.company?.companyName,
    header: 'Bolagsnamn',
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
