import { useMemo } from 'react';
import { Link as RouterLink, createSearchParams, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, DialogActions, DialogContent, DialogTitle, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MRT_EditActionButtons } from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// third party

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
    params.id === 'new' ? undefined : { documentId: params.id }
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
        return 'Företag';
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
          <Link component={RouterLink} to={`/dashboard/companies/${entityId}`}>
            {companyMap.get(entityId)?.companyName}
          </Link>
        );
      case 'contact':
        return (
          <Link component={RouterLink} to={`/dashboard/contacts/${entityId}`}>
            {contactMap.get(entityId)?.contactName}
          </Link>
        );
      case 'assignment':
        return (
          <Link
            component={RouterLink}
            to={{
              pathname: `/dashboard/assignments/${entityId}`,
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
    <>
      <Typography variant="h4" color="primary">
        {document ? 'Redigera dokument' : 'Lägg till dokument'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <DocumentForm formProps={{ defaultValues: document }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        {document && (
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
                      renderCreateRowDialogContent={({ row, table }) => (
                        <>
                          <DialogTitle variant="h4" color="primary">
                            Ny referens
                          </DialogTitle>
                          <DialogContent>
                            <DocumentReferenceForm
                              sx={{ mt: 1 }}
                              formProps={{ defaultValues: { documentId: document.documentId } }}
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
                      renderEditRowDialogContent={({ row, table }) => (
                        <>
                          <DialogTitle variant="h4" color="primary">
                            Redigera referens
                          </DialogTitle>
                          <DialogContent>
                            <DocumentReferenceForm
                              sx={{ mt: 1 }}
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
                      onCreate={(row) => createDocumentReference(row)}
                      onUpdate={(row, prev) => updateDocumentReference({ row, where: prev })}
                      onDelete={(row) => deleteDocumentReference(row)}
                    />
                  )
                }
              ]}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 'auto' }}>
          {document && (
            <DeleteConfirm onClick={() => deleteDocument(document, { onSuccess: () => navigate('..') })}>
              {(popupState) => (
                <Button size="large" variant="outlined" color="error" {...bindTrigger(popupState)}>
                  Ta bort
                </Button>
              )}
            </DeleteConfirm>
          )}
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Avbryt
          </Button>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
        </Stack>
      </DocumentForm>
    </>
  );
};

export default DocumentEdit;
