import { Link as RouterLink, createSearchParams } from 'react-router-dom';

// material-ui
import { Link, List, ListItem } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Contact } from '@/features/contacts/api/contactsApi';
import { formatDate, toLocalTime } from '@/utils';
import { Assignment } from '../api/assignmentsApi';

// ==============================|| ASSIGNMENT CONFIG ||============================== //

export const assignmentColumns: MRT_ColumnDef<Assignment>[] = [
  {
    accessorKey: 'assignmentName',
    header: 'Uppdragsnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/home/assignments/${row.original.assignmentId}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
    accessorKey: 'responsibleContacts',
    header: 'Ansvariga',
    enableEditing: false,
    Cell: ({ cell }) => (
      <List disablePadding>
        {cell.getValue<Contact[]>().map((contact) => (
          <ListItem key={contact.contactId} sx={{ py: 0.25 }} disableGutters>
            <Link component={RouterLink} to={`/home/contacts/${contact.contactId}`}>
              {contact.contactName}
            </Link>
          </ListItem>
        ))}
      </List>
    )
  },
  {
    accessorKey: 'externalContact.contactName',
    accessorFn: (row) => row.externalContact?.contactName,
    header: 'Extern kontakt',
    enableEditing: false,
    Cell: ({ cell, row }) => (
      <Link
        component={RouterLink}
        to={{
          pathname: `/home/contacts/${row.original.externalContactId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
    accessorKey: 'company.companyName',
    accessorFn: (row) => row.company?.companyName,
    header: 'Bolag',
    enableEditing: false,
    Cell: ({ cell, row }) => (
      <Link
        component={RouterLink}
        to={{
          pathname: `/home/companies/${row.original.companyId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'type', header: 'Typ', filterVariant: 'multi-select' },
  { accessorKey: 'status', header: 'Status', filterVariant: 'multi-select' },
  {
    accessorKey: 'fee',
    header: 'Arvode',
    filterVariant: 'range-slider',
    Cell: ({ cell }) =>
      cell.getValue<number>().toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
  },
  {
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
