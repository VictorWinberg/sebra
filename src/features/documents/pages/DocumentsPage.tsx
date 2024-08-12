// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { DocumentContent } from '@/utils';
import DocumentForm from '../components/DocumentForm';
import { documentColumns } from '../config/DocumentConfig';
import { useDeleteDocument, useSaveDocument } from '../hooks/useDocumentsMutations';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import AddIcon from '@mui/icons-material/Add';

// ==============================|| DOCUMENTS PAGE ||============================== //

const DocumentPage = () => {
  const { data = [], isLoading } = useDocuments();
  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  if (isLoading) return;

  return (
    <FlexGrow>
      <DataTable<DocumentContent>
        data={data}
        columns={documentColumns}
        getRowId={(row) => `${row.documentId}`}
        state={{ isLoading }}
        onCreate={(row) => saveDocument(row)}
        onUpdate={(row) => saveDocument(row)}
        onDelete={(row) => deleteDocument(row)}
        renderTopToolbarCustomActions={({ table }) => (
          <Button
            onClick={() => table.setCreatingRow(true)}
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till dokument
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              {table.getState().creatingRow ? 'Lägg till dokument' : 'Redigera dokument'}
            </DialogTitle>
            <DialogContent>
              <DocumentForm
                sx={{ mt: 1 }}
                enableExistingDocuments={Boolean(table.getState().creatingRow)}
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
