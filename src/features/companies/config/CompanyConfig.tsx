import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { formatDate, toLocalTime } from '@/utils';
import { fetchCompanies } from '../api/companiesApi';

// ==============================|| COMPANY CONFIG ||============================== //

export type CompanyData = Awaited<ReturnType<typeof fetchCompanies>>[number];
export const companyColumns: MRT_ColumnDef<CompanyData>[] = [
  {
    accessorKey: 'companyName',
    header: 'Företagsnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/dashboard/companies/${row.original.companyId}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'industry', header: 'Industri', filterVariant: 'multi-select' },
  { accessorKey: 'website', header: 'Website' },
  {
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
