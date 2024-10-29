import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import { DocumentReference, DocumentReference_Where, Maybe } from '@/api/gql/graphql';
import DataTable from '@/ui-component/DataTable';
import SebraDialog from '@/ui-component/SebraDialog';
import { formatDate, toLocalTime } from '@/utils';
import {
  useCreateDocumentReference,
  useDeleteDocumentReference,
  useSaveDocument
} from '../hooks/useDocumentsMutations';
import { useDocumentReferences } from '../hooks/useDocumentsQueries';
import DocumentReferenceForm from './DocumentReferenceForm';

interface DocumentReferenceTableProps {
  defaultValues: Omit<DocumentReference, 'id' | 'document'>;
  where: DocumentReference_Where;
}

const DocumentReferenceTable = ({ defaultValues, where }: DocumentReferenceTableProps) => {
  const { data: references = [], isLoading } = useDocumentReferences(where);

  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();

  return (
    <DataTable<DocumentReference & { file?: Maybe<File> }>
      data={references}
      getRowId={(row) => row.id}
      state={{ isLoading: isLoading }}
      columns={[
        {
          accessorKey: 'document.alt',
          header: 'Dokumentnamn',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/documents/${row.original.document.id}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorKey: 'document.mimeType', header: 'Filtyp', enableEditing: false },
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
          FormComponent={DocumentReferenceForm}
        />
      )}
      onCreate={(row) =>
        saveDocument(
          { ...row.document, file: row.file },
          {
            onSuccess: (document) => createDocumentReference({ ...defaultValues, document })
          }
        )
      }
      onUpdate={(row) => saveDocument({ ...row.document, file: row.file })}
      onDelete={(row) => deleteDocumentReference(row)}
    />
  );
};

export default DocumentReferenceTable;
