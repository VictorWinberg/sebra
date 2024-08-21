import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DataTable from '@/ui-component/DataTable';
import SebraDialog from '@/ui-component/SebraDialog';
import { DocumentContent, formatDate, toLocalTime, toMap } from '@/utils';
import { DocumentReference } from '../api/documentsApi';
import {
  useCreateDocumentReference,
  useDeleteDocumentReference,
  useSaveDocument
} from '../hooks/useDocumentsMutations';
import { useDocumentReferences, useDocuments } from '../hooks/useDocumentsQueries';
import DocumentForm from './DocumentForm';

interface DocumentReferenceTableProps {
  defaultValues: Omit<DocumentReference, 'documentId'>;
}

const DocumentReferenceTable = ({ defaultValues }: DocumentReferenceTableProps) => {
  const { data: documentReferences = [], isLoading } = useDocumentReferences(defaultValues);
  const { data: files = [], isLoading: filesIsLoading } = useDocuments();

  // TODO: Refactor to use a selector or similar
  const documents: DocumentContent[] = useMemo(() => {
    const fileMap = toMap(files, 'documentId');
    return documentReferences.map((ref) => fileMap.get(ref.documentId)).filter((doc) => !!doc);
  }, [files, documentReferences]);

  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();

  return (
    <DataTable<DocumentContent>
      data={documents}
      getRowId={(row) => row.documentId}
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
        { accessorKey: 'content.type', accessorFn: (row) => row.content?.type, header: 'Filtyp', enableEditing: false },
        {
          accessorKey: 'content.lastModified',
          accessorFn: (row) => dayjs(row.content?.lastModified),
          header: 'Senast uppdaterad',
          filterVariant: 'date-range',
          enableEditing: false,
          Cell: ({ cell }) => formatDate(toLocalTime(cell.getValue<Dayjs>()))
        }
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <SebraDialog
          table={table}
          row={row}
          titles={{ creating: 'Nytt dokument', editing: 'Redigera dokument' }}
          FormComponent={DocumentForm}
        />
      )}
      onCreate={(row) =>
        saveDocument(row, {
          onSuccess: (documentId) => createDocumentReference({ ...defaultValues, documentId })
        })
      }
      onUpdate={(row) => saveDocument(row)}
      onDelete={(row) => deleteDocumentReference(row)}
    />
  );
};

export default DocumentReferenceTable;
