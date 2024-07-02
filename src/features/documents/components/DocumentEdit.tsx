import { useMemo } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { toMap } from '@/utils';
import { DocumentRecord } from '../api/documentsApi';
import { useDeleteDocument, useSaveDocument } from '../hooks/useDocumentsMutations';
import { useDocument, useDocumentReferences } from '../hooks/useDocumentsQueries';
import DocumentForm from './DocumentForm';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import { bindTrigger } from 'material-ui-popup-state';

// ==============================|| DOCUMENT EDIT PAGE ||============================== //

const DocumentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: document, isLoading } = useDocument(params.id === 'new' ? undefined : params.id);
  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  const { data: references = [], isLoading: referencesIsLoading } = useDocumentReferences(
    params.id === 'new' ? undefined : { documentId: params.id }
  );
  const { data: companies = [] } = useCompanies();
  const { data: contacts = [] } = useContacts();
  const { data: assignments = [] } = useAssignments();

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

  const renderLink = (entityType: string, entityId: string) => {
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
          <Link component={RouterLink} to={`/dashboard/assignments/${entityId}`}>
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
