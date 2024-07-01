import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { useDeleteFile, useFiles, useSaveFile, useUpdateFile } from '@/hooks/useFiles';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { FileDocument, toLocalTime } from '@/utils';
import DocumentForm from '../components/DocumentForm';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| DOCUMENTS PAGE ||============================== //

const columns: MRT_ColumnDef<FileDocument>[] = [
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
    Cell: ({ cell }) => toLocalTime(cell.getValue<Dayjs>()).format('YYYY-MM-DD HH:mm')
  }
];

const DocumentPage = () => {
  const { data = [], isLoading } = useFiles();
  const { mutate: saveFile } = useSaveFile();
  const { mutate: updateFile } = useUpdateFile();
  const { mutate: deleteFile } = useDeleteFile();

  if (isLoading) return;

  return (
    <FlexGrow>
      <DataTable<FileDocument>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.documentId}`}
        state={{ isLoading }}
        onCreate={(row) => saveFile(row)}
        onUpdate={(row) => updateFile(row)}
        onDelete={(row) => deleteFile(row)}
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
                formProps={{ values: row.original }}
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
