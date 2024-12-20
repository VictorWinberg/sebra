import { createSearchParams } from 'react-router-dom';

// material-ui
import { Link, List, ListItem } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Assignment, Contact } from '@/api/gql/graphql';
import { RouterLink } from '@/ui-component/RouterLink';
import { formatDate, toLocalTime } from '@/utils';

// ==============================|| ASSIGNMENT CONFIG ||============================== //

export const assignmentColumns: MRT_ColumnDef<Assignment>[] = [
  {
    accessorKey: 'assignmentName',
    header: 'Uppdragsnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/home/assignments/${row.original.id}`}>
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
          <ListItem key={contact.id} sx={{ py: 0.25 }} disableGutters>
            <Link component={RouterLink} to={`/home/contacts/${contact.id}`}>
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
          pathname: `/home/contacts/${row.original.externalContact?.id}`,
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
          pathname: `/home/companies/${row.original.company?.id}`,
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
      cell.getValue<number>()?.toLocaleString('sv-SE', {
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
