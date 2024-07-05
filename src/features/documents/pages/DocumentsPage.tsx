import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { DocumentContent, formatDate, toLocalTime } from '@/utils';
import DocumentForm from '../components/DocumentForm';
import { useDeleteDocument, useSaveDocument } from '../hooks/useDocumentsMutations';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| DOCUMENTS PAGE ||============================== //

const columns: MRT_ColumnDef<DocumentContent>[] = [
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
    accessorFn: (row) => dayjs(row.content.lastModified),
    header: 'Senast uppdaterad',
    filterVariant: 'date-range',
    enableEditing: false,
    Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
  }
];

const DocumentPage = () => {
  const { data = [], isLoading } = useDocuments();
  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  if (isLoading) return;

  return (
    <FlexGrow>
      <DataTable<DocumentContent>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.documentId}`}
        state={{ isLoading }}
        onCreate={(row) => saveDocument(row)}
        onUpdate={(row) => saveDocument(row)}
        onDelete={(row) => deleteDocument(row)}
        renderTopToolbarCustomActions={() => (
          <Button
            component={RouterLink}
            to="new"
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till dokument
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera dokument
            </DialogTitle>
            <DialogContent>
              <DocumentForm
                sx={{ mt: 1 }}
                formProps={{ defaultValues: row.original }}
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

export default DocumentPage;
