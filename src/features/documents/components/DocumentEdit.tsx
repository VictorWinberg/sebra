import { useMemo } from 'react';
import { Link as RouterLink, createSearchParams, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Link, Typography } from '@mui/material';

// project imports
import { Media } from '@/api/gql/graphql';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
import { FormActionButtons } from '@/ui-component/SebraForm';
import { toMap } from '@/utils';
import {
  useCreateDocumentReference,
  useDeleteDocument,
  useDeleteDocumentReference,
  useSaveDocument,
  useUpdateDocument,
  useUpdateDocumentReference
} from '../hooks/useDocumentsMutations';
import { useDocument, useDocumentReferences } from '../hooks/useDocumentsQueries';
import DocumentForm from './DocumentForm';
import DocumentReferenceForm from './DocumentReferenceForm';

// ==============================|| DOCUMENT EDIT PAGE ||============================== //

const DocumentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: document, isLoading } = useDocument(params.id === 'new' ? undefined : params.id);
  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: updateDocument } = useUpdateDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  const { data: companies = [] } = useCompanies();
  const { data: contacts = [] } = useContacts();
  const { data: assignments = [] } = useAssignments();
  const { data: references = [], isLoading: referencesIsLoading } = useDocumentReferences(
    params.id !== 'new' ? { document: { equals: params.id } } : undefined
  );
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: updateDocumentReference } = useUpdateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();
  const companyMap = useMemo(() => toMap(companies, 'id'), [companies]);
  const contactMap = useMemo(() => toMap(contacts, 'id'), [contacts]);
  const assignmentMap = useMemo(() => toMap(assignments, 'id'), [assignments]);

  const handleSubmit = (data: Media) => {
    if (document) {
      updateDocument({ ...data, id: document.id });
    } else {
      saveDocument(data, {
        onSuccess: (res) => navigate(`/documents/${res.doc.id}`)
      });
    }
  };

  if (isLoading) return;

  const renderType = (entityType: string) => {
    switch (entityType) {
      case 'company':
        return 'Bolag';
      case 'contact':
        return 'Kontakt';
      case 'assignment':
        return 'Uppdrag';
      default:
        return null;
    }
  };

  const renderLink = (entityType: string, entityId: string) => {
    switch (entityType) {
      case 'company':
        return (
          <Link component={RouterLink} to={`/home/companies/${entityId}`}>
            {companyMap.get(entityId)?.companyName}
          </Link>
        );
      case 'contact':
        return (
          <Link component={RouterLink} to={`/home/contacts/${entityId}`}>
            {contactMap.get(entityId)?.contactName}
          </Link>
        );
      case 'assignment':
        return (
          <Link
            component={RouterLink}
            to={{
              pathname: `/home/assignments/${entityId}`,
              search: `${createSearchParams({ tab: 'documents' })}`
            }}
          >
            {assignmentMap.get(entityId)?.assignmentName}
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <DocumentForm
      formProps={{ defaultValues: { ...document } }}
      onSubmit={handleSubmit}
      renderTopContent={() => (
        <Box sx={{ position: 'relative', mt: 1, mb: 3 }}>
          <Typography variant="h4" color="primary">
            {document ? 'Redigera dokument' : 'Lägg till dokument'}
          </Typography>

          <FormActionButtons
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onDelete={document ? () => deleteDocument(document, { onSuccess: () => navigate('..') }) : undefined}
            onCancel={() => navigate(-1)}
          />
        </Box>
      )}
      renderBottomContent={() =>
        document && (
          <FlexGrow>
            <ContentTabs
              tabs={[
                {
                  id: 'references',
                  label: 'Referenser',
                  content: (
                    <DataTable
                      data={references}
                      getRowId={(row) => `${row.document}-${row.entityType}-${row.entityId}`}
                      state={{ isLoading: referencesIsLoading }}
                      columns={[
                        {
                          accessorKey: 'entityType',
                          header: 'Typ',
                          enableEditing: false,
                          Cell: ({ row }) => renderType(row.original.entityType)
                        },
                        {
                          accessorKey: 'entityId',
                          header: 'Länk',
                          enableEditing: false,
                          Cell: ({ row }) => renderLink(row.original.entityType, row.original.entityId)
                        }
                      ]}
                      renderEditRowDialogContent={({ row, table }) => (
                        <SebraDialog
                          table={table}
                          row={row}
                          titles={{ creating: 'Ny referens', editing: 'Redigera referens' }}
                          FormComponent={DocumentReferenceForm}
                          defaultValues={{ document }}
                        />
                      )}
                      onCreate={(row) => createDocumentReference(row)}
                      onUpdate={(row) => updateDocumentReference(row)}
                      onDelete={(row) => deleteDocumentReference(row)}
                    />
                  )
                }
              ]}
            />
          </FlexGrow>
        )
      }
    />
  );
};

export default DocumentEdit;
