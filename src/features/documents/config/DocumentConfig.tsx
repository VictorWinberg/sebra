import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { DocumentContent, formatDate, toLocalTime } from '@/utils';

// ==============================|| DOCUMENT CONFIG ||============================== //

export const documentColumns: MRT_ColumnDef<DocumentContent>[] = [
  {
    accessorKey: 'documentName',
    header: 'Dokumentnamn',
    Cell: ({ cell, row }) => (
      <Link component={RouterLink} to={`/documents/${row.original.documentId}`}>
        {cell.getValue<string>()}
      </Link>
    )
  },
  { accessorKey: 'content.type', header: 'Filtyp' },
  {
    accessorFn: (row) => dayjs(row.content?.lastModified),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];
