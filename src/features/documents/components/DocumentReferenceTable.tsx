import { useMemo } from 'react';

// material-ui
import { Link } from '@mui/material';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { DocumentReference, DocumentReference_Where, Media } from '@/api/gql/graphql';
import DataTable from '@/ui-component/DataTable';
import { RouterLink } from '@/ui-component/RouterLink';
import SebraDialog from '@/ui-component/SebraDialog';
import { formatDate, toLocalTime } from '@/utils';
import {
  useCreateDocumentReference,
  useDeleteDocumentReference,
  useSaveDocument,
  useUpdateDocument
} from '../hooks/useDocumentsMutations';
import { useDocumentReferences } from '../hooks/useDocumentsQueries';
import DocumentForm from './DocumentForm';

interface DocumentReferenceTableProps {
  defaultValues: Omit<DocumentReference, 'id' | 'document'>;
  where: DocumentReference_Where;
}

const DocumentReferenceTable = ({ defaultValues, where }: DocumentReferenceTableProps) => {
  const { data: references = [], isLoading } = useDocumentReferences(where);
  const documents = useMemo(() => references.map((ref) => ref.document), [references]);

  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: updateDocument } = useUpdateDocument();
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();

  if (isLoading) return;

  return (
    <DataTable<Media & { upload?: File }>
      data={documents}
      getRowId={(row) => row.id}
      state={{ isLoading: isLoading }}
      columns={[
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
      ]}
      renderEditRowDialogContent={({ row, table }) => (
        <SebraDialog
          table={table}
          row={row}
          titles={{ creating: 'Nytt dokument', editing: 'Redigera dokument' }}
          FormComponent={DocumentForm}
        />
      )}
      onCreate={(row) => {
        if (row.upload) {
          saveDocument(row, {
            onSuccess: (res) => createDocumentReference({ ...defaultValues, document: res.doc })
          });
        } else {
          createDocumentReference({ ...defaultValues, document: row });
        }
      }}
      onUpdate={(row) => updateDocument(row)}
      onDelete={(row) => deleteDocumentReference(references.find((ref) => ref.document.id === row.id)!)}
    />
  );
};

export default DocumentReferenceTable;
