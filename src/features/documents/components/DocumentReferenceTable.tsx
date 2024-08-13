import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DataTable from '@/ui-component/DataTable';
import { formatDate, toLocalTime, toMap } from '@/utils';
import { DocumentRecord, DocumentReference } from '../api/documentsApi';
import {
  useCreateDocumentReference,
  useDeleteDocumentReference,
  useSaveDocument
} from '../hooks/useDocumentsMutations';
import { useDocuments } from '../hooks/useDocumentsQueries';
import DocumentForm from './DocumentForm';

interface DocumentTableProps {
  documentReferences: DocumentReference[];
  isLoading: boolean;
  defaultValues?: Partial<DocumentRecord>;
}

const DocumentTable = ({ documentReferences, isLoading, defaultValues }: DocumentTableProps) => {
  const { data: files = [], isLoading: filesIsLoading } = useDocuments();

  // TODO: Refactor to use a selector or similar
  const documents = useMemo(() => {
    const fileMap = toMap(files, 'documentId');
    return documentReferences.map((ref) => ({ ...ref, ...fileMap.get(ref.documentId)! }));
  }, [files, documentReferences]);

  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();

  return (
    <DataTable
      data={documents}
      getRowId={(row) => `${row.documentId}-${row.entityType}-${row.entityId}`}
      state={{ isLoading: filesIsLoading || isLoading }}
      columns={[
        {
          accessorKey: 'documentName',
          header: 'Dokumentnamn',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/documents/${row.original.documentId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorFn: (row) => row.content?.type, header: 'Filtyp', enableEditing: false },
        {
          accessorFn: (row) => dayjs(row.content?.lastModified),
          header: 'Senast uppdaterad',
          filterVariant: 'date-range',
          enableEditing: false,
          Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
        }
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            {table.getState().creatingRow ? 'Nytt dokument' : 'Redigera dokument'}
          </DialogTitle>
          <DialogContent>
            <DocumentForm
              sx={{ mt: 1 }}
              enableExistingDocuments={Boolean(table.getState().creatingRow)}
              formProps={{ defaultValues: { ...defaultValues, ...row.original } }}
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
      onCreate={(row) =>
        saveDocument(row, {
          onSuccess: (documentId) => createDocumentReference({ ...row, documentId })
        })
      }
      onUpdate={(row) => saveDocument(row)}
      onDelete={(row) => deleteDocumentReference(row)}
    />
  );
};

export default DocumentTable;
