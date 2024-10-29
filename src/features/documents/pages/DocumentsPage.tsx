// material-ui
import { Button } from '@mui/material';

// project imports
import { Media } from '@/api/gql/graphql';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
import DocumentForm from '../components/DocumentForm';
import { documentColumns } from '../config/DocumentConfig';
import { useDeleteDocument, useSaveDocument, useUpdateDocument } from '../hooks/useDocumentsMutations';
import { useDocuments } from '../hooks/useDocumentsQueries';

// assets
import AddIcon from '@mui/icons-material/Add';

// ==============================|| DOCUMENTS PAGE ||============================== //

const DocumentPage = () => {
  const { data = [], isLoading } = useDocuments();
  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: updateDocument } = useUpdateDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  if (isLoading) return;

  return (
    <FlexGrow>
      <DataTable<Media>
        data={data}
        columns={documentColumns}
        getRowId={(row) => `${row.id}`}
        state={{ isLoading }}
        onCreate={(row) => saveDocument(row)}
        onUpdate={(row) => updateDocument(row)}
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
