import { Link as RouterLink, createSearchParams } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { formatDate, toLocalTime } from '@/utils';
import { fetchAssignments } from '../api/assignmentsApi';

// ==============================|| ASSIGNMENT CONFIG ||============================== //

export type AssignmentData = Awaited<ReturnType<typeof fetchAssignments>>[number];
export const assignmentColumns: MRT_ColumnDef<AssignmentData>[] = [
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
    accessorFn: (row) => row.responsiblePerson?.contactName,
    header: 'Ansvarig',
    enableEditing: false,
    Cell: ({ cell, row }) => (
      <Link
        component={RouterLink}
        to={{
          pathname: `/home/contacts/${row.original.responsiblePersonId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
    accessorFn: (row) => row.externalContactPerson?.contactName,
    header: 'Extern',
    enableEditing: false,
    Cell: ({ cell, row }) => (
      <Link
        component={RouterLink}
        to={{
          pathname: `/home/contacts/${row.original.externalContactPersonId}`,
          search: `${createSearchParams({ tab: 'assignments' })}`
        }}
      >
        {cell.getValue<string>()}
      </Link>
    )
  },
  {
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
