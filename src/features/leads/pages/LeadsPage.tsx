import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Avatar, Box, Button, Chip, Divider, Link, List, ListItem, Typography } from '@mui/material';

// third-party
import dayjs from 'dayjs';
import { MRT_ColumnDef } from 'material-react-table';

// project imports
import DataBoard from '@/ui-component/board/DataBoard';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import SebraDialog from '@/ui-component/SebraDialog';
import { stringAvatar, timeAgo } from '@/utils';
import { Lead, LEAD_STAGES } from '../api/leadsApi';
import LeadForm from '../components/LeadForm';
import { useCreateLead, useDeleteLead, useUpdateLead } from '../hooks/useLeadsMutations';
import { useLeads } from '../hooks/useLeadsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| LEADS PAGE ||============================== //

const columns: MRT_ColumnDef<Lead>[] = [
  { accessorKey: 'leadDescription', header: 'Beskrivning' },
  { accessorKey: 'leadStage', header: 'Status' }
];

const LeadsPage = () => {
  const { data: leads = [], isLoading } = useLeads();

  const { mutate: createLead } = useCreateLead();
  const { mutate: updateLead } = useUpdateLead();
  const { mutate: deleteLead } = useDeleteLead();

  if (isLoading) return;

  return (
    <FlexGrow>
      <DataBoard<Lead>
        data={leads}
        columns={columns}
        columnId="stage"
        stages={LEAD_STAGES}
        onCreate={(row) => createLead(row)}
        onUpdate={(row) => updateLead(row)}
        onDelete={(row) => deleteLead(row)}
        getRowId={(row) => `${row.leadId}`}
        renderTopToolbarCustomActions={({ table }) => (
          <Button
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
            onClick={() => table.setCreatingRow(true)}
          >
            Lägg till lead
          </Button>
        )}
        renderCard={({ row, table }) => (
          <Box>
            <Link sx={{ textAlign: 'left' }} component="button" onClick={() => table.setEditingRow(row)}>
              {row.original.leadTitle}
            </Link>
            <Divider sx={{ my: 1 }} />
            {row.original.assignment && (
              <Link component={RouterLink} to={`/home/assignments/${row.original.assignmentId}`}>
                Uppdrag: {row.original.assignment.assignmentName}
              </Link>
            )}
            <List disablePadding>
              {row.original.contact && (
                <ListItem sx={{ py: 0.5 }} disableGutters>
                  <Chip
                    component={RouterLink}
                    variant="outlined"
                    avatar={<Avatar {...stringAvatar(row.original.contact.contactName)} />}
                    label={row.original.contact.contactName}
                    to={`/home/contacts/${row.original.contactId}`}
                    clickable
                    size="small"
                  />
                </ListItem>
              )}
              {row.original.company && (
                <ListItem sx={{ py: 0.5 }} disableGutters>
                  <Chip
                    component={RouterLink}
                    variant="outlined"
                    avatar={<Avatar {...stringAvatar(row.original.company.companyName)} />}
                    label={row.original.company.companyName}
                    to={`/home/companies/${row.original.companyId}`}
                    clickable
                    size="small"
                  />
                </ListItem>
              )}
            </List>
            <Typography variant="caption">Uppdaterad {timeAgo(dayjs.utc(row.original.updatedAt))}</Typography>
          </Box>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <SebraDialog
              table={table}
              row={row}
              titles={{ creating: 'Ny lead', editing: 'Redigera lead' }}
              FormComponent={LeadForm}
            />
            {table.getState().editingRow && (
              <Button
                color="error"
                onClick={() => {
                  table.setEditingRow(null);
                  deleteLead(row.original);
                }}
              >
                Ta bort
              </Button>
            )}
          </>
        )}
      />
    </FlexGrow>
  );
};

export default LeadsPage;
