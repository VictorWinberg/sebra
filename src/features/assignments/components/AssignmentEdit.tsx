import { useMemo } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, DialogActions, DialogContent, DialogTitle, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MRT_EditActionButtons } from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DocumentForm from '@/features/documents/components/DocumentForm';
import {
  useCreateDocumentReference,
  useDeleteDocumentReference,
  useSaveDocument
} from '@/features/documents/hooks/useDocumentsMutations';
import { useDocumentReferences, useDocuments } from '@/features/documents/hooks/useDocumentsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import DeleteConfirm from '@/ui-component/DeleteConfirm';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { toLocalTime, toMap } from '@/utils';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignment } from '../hooks/useAssignmentsQueries';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT EDIT PAGE ||============================== //

const AssignmentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: assignment, isLoading } = useAssignment(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  const { data: files = [], isLoading: filesIsLoading } = useDocuments();
  const { data: documentReferences = [], isLoading: documentsIsLoading } = useDocumentReferences({
    entityType: 'assignment',
    entityId: assignment?.assignmentId
  });

  // TODO: Refactor to use a selector or similar
  const documents = useMemo(() => {
    const fileMap = toMap(files, 'documentId');
    return documentReferences.map((ref) => ({ ...ref, ...fileMap.get(ref.documentId)! }));
  }, [files, documentReferences]);

  const { mutate: saveDocument } = useSaveDocument();
  const { mutate: createDocumentReference } = useCreateDocumentReference();
  const { mutate: deleteDocumentReference } = useDeleteDocumentReference();

  const handleSubmit = (data: Partial<Assignment>) => {
    if (assignment) {
      updateAssignment(data);
    } else {
      createAssignment(data, {
        onSuccess: (res) => navigate(`/dashboard/assignments/${res.assignmentId}`)
      });
    }
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {assignment ? 'Redigera uppdrag' : 'Lägg till uppdrag'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <AssignmentForm formProps={{ values: assignment }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        {assignment && (
          <FlexGrow>
            <ContentTabs
              tabs={[
                { id: 'interactions', label: 'Interaktioner', content: <>Interaktioner...</> },
                {
                  id: 'documents',
                  label: 'Dokument',
                  content: (
                    <DataTable
                      data={documents}
                      getRowId={(row) => `${row.documentId}-${row.entityType}-${row.entityId}`}
                      state={{ isLoading: filesIsLoading || documentsIsLoading }}
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
                          Cell: ({ cell }) => toLocalTime(cell.getValue<Dayjs>()).format('YYYY-MM-DD HH:mm')
                        }
                      ]}
                      renderCreateRowDialogContent={({ row, table }) => (
                        <>
                          <DialogTitle variant="h4" color="primary">
                            Nytt dokument
                          </DialogTitle>
                          <DialogContent>
                            <DocumentForm
                              sx={{ mt: 1 }}
                              enableExistingDocuments
                              formProps={{
                                defaultValues: { entityType: 'assignment', entityId: assignment.assignmentId }
                              }}
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
                            Redigera dokument
                          </DialogTitle>
                          <DialogContent>
                            <DocumentForm
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
                      onCreate={(row) =>
                        saveDocument(row, {
                          onSuccess: (documentId) => createDocumentReference({ ...row, documentId })
                        })
                      }
                      onUpdate={(row) => saveDocument(row)}
                      onDelete={(row) => deleteDocumentReference(row)}
                    />
                  )
                },
                { id: 'stakeholders', label: 'Intressenter', content: <>Intressenter...</> },
                { id: 'modules', label: 'Moduler', content: <>Moduler...</> }
              ]}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 'auto' }}>
          {assignment && (
            <DeleteConfirm onClick={() => deleteAssignment(assignment, { onSuccess: () => navigate('..') })}>
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
      </AssignmentForm>
    </>
  );
};

export default AssignmentEdit;
