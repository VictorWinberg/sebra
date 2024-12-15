// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { Media } from '@/api/gql/graphql';
import { RouterLink } from '@/ui-component/RouterLink';
import { formatDate, toLocalTime } from '@/utils';

// ==============================|| DOCUMENT CONFIG ||============================== //

export const documentColumns: MRT_ColumnDef<Media>[] = [
  {
    accessorKey: 'alt',
    header: 'Dokumentnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/documents/${row.original.id}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'mimeType', header: 'Filtyp', enableEditing: false },
  {
    accessorKey: 'updatedAt',
    accessorFn: (row) => dayjs(row.updatedAt),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
