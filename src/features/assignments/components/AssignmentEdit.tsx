import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, DialogActions, DialogContent, DialogTitle, Link, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MRT_EditActionButtons } from 'material-react-table';

// third party
import dayjs, { Dayjs } from 'dayjs';

// project imports
import DocumentForm from '@/features/documents/components/DocumentForm';
import {
  useCreateDocument,
  useDeleteDocument,
  useUpdateDocument
} from '@/features/documents/hooks/useDocumentsMutations';
import { useDocuments } from '@/features/documents/hooks/useDocumentsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { toLocalTime } from '@/utils';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignment } from '../hooks/useAssignmentsQueries';
import AssignmentForm from './AssignmentForm';

// ==============================|| ASSIGNMENT EDIT PAGE ||============================== //

const AssignmentEdit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: assignment, isLoading } = useAssignment(params.id === 'new' ? undefined : Number(params.id));
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();

  const { data: documents = [], isLoading: documentsIsLoading } = useDocuments({
    entityType: 'assignment',
    entityId: `${assignment?.assignmentId}`
  });
  const { mutate: createDocument } = useCreateDocument();
  const { mutate: updateDocument } = useUpdateDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

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
                { label: 'Interaktioner', content: <>Interaktioner...</> },
                {
                  label: 'Dokument',
                  content: (
                    <DataTable
                      data={documents}
                      getRowId={(row) => `${row.documentId}-${row.entityType}-${row.entityId}`}
                      state={{ isLoading: documentsIsLoading }}
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
                        { accessorKey: 'content.type', header: 'Filtyp' },
                        {
                          accessorFn: (row) => dayjs(row.content.lastModified),
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
                              formProps={{
                                defaultValues: { entityType: 'assignment', entityId: `${assignment.assignmentId}` }
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
                              formProps={{ values: row.original }}
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
                      onCreate={(row) => createDocument(row)}
                      onUpdate={(row) => updateDocument(row)}
                      onDelete={(row) => deleteDocument(row)}
                    />
                  )
                },
                { label: 'Intressenter', content: <>Intressenter...</> },
                { label: 'Moduler', content: <>Moduler...</> }
              ]}
              selected={1}
            />
          </FlexGrow>
        )}

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
        </Stack>
      </AssignmentForm>
    </>
  );
};

export default AssignmentEdit;
