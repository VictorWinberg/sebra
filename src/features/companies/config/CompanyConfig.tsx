import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Company } from '@/api/gql/graphql';
import { formatDate, toLocalTime } from '@/utils';

// ==============================|| COMPANY CONFIG ||============================== //

export const companyColumns: MRT_ColumnDef<Company>[] = [
  {
    accessorKey: 'companyName',
    header: 'Bolagsnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/home/companies/${row.original.id}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'industry', header: 'Industri', filterVariant: 'multi-select' },
  { accessorKey: 'website', header: 'Website' },
  { accessorKey: 'organizationNumber', header: 'Org.nr' },
  {
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs.utc(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
