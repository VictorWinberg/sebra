import { useMemo } from 'react';
import { Link as RouterLink, createSearchParams, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, DialogActions, DialogContent, DialogTitle, Link, Stack, Typography } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { toMap } from '@/utils';
import { DocumentRecord } from '../api/documentsApi';
import {
  useCreateDocumentReference,
  useDeleteDocument,
  useDeleteDocumentReference,
  useSaveDocument,
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
  const { mutate: deleteDocument } = useDeleteDocument();

  const { data: companies = [] } = useCompanies();
  const { data: contacts = [] } = useContacts();
  const { data: assignments = [] } = useAssignments();
  const { data: references = [], isLoading: referencesIsLoading } = useDocumentReferences(
    params.id !== 'new' ? { documentId: params.id } : undefined
  );
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: updateDocumentReference } = useUpdateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();
  const companyMap = useMemo(() => toMap(companies, 'companyId'), [companies]);
  const contactMap = useMemo(() => toMap(contacts, 'contactId'), [contacts]);
  const assignmentMap = useMemo(() => toMap(assignments, 'assignmentId'), [assignments]);

  const handleSubmit = (data: DocumentRecord) => {
    saveDocument(data, {
      onSuccess: (res) => navigate(`/documents/${res}`)
    });
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

  const renderLink = (entityType: string, entityId: number) => {
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
      formProps={{ defaultValues: document }}
      onSubmit={handleSubmit}
      renderTopContent={() => (
        <Box sx={{ position: 'relative', mt: 1, mb: 3 }}>
          <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: 0 }}>
            {document && (
              <DeleteConfirm onClick={() => deleteDocument(document, { onSuccess: () => navigate('..') })}>
                {(popupState) => (
                  <Button variant="outlined" color="error" {...bindTrigger(popupState)}>
                    Ta bort
                  </Button>
                )}
              </DeleteConfirm>
            )}
            <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
              Avbryt
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Spara
            </Button>
          </Stack>

          <Typography variant="h4" color="primary">
            {document ? 'Redigera dokument' : 'Lägg till dokument'}
          </Typography>
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
                      getRowId={(row) => `${row.documentId}-${row.entityType}-${row.entityId}`}
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
                        <>
                          <DialogTitle variant="h4" color="primary">
                            {table.getState().creatingRow ? 'Ny referens' : 'Redigera referens'}
                          </DialogTitle>
                          <DialogContent>
                            <DocumentReferenceForm
                              sx={{ mt: 1 }}
                              formProps={{ defaultValues: { ...row.original, documentId: document.documentId } }}
                              onChange={(values) => {
                                row._valuesCache = values;
                              }}
                            />
                          </DialogContent>
                          <DialogActions>
                            <MRT_EditActionButtons row={row} table={table} variant="text" />
                          </DialogActions>
                        </>
                      )}
                      onCreate={(row) => createDocumentReference(row)}
                      onUpdate={(row, prev) => updateDocumentReference({ row, where: prev })}
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
