// material-ui
import { Button } from '@mui/material';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
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
          <SebraDialog
            table={table}
            row={row}
            titles={{ creating: 'Lägg till dokument', editing: 'Redigera dokument' }}
            FormComponent={DocumentForm}
          />
        )}
      />
    </FlexGrow>
  );
};

export default DocumentPage;
