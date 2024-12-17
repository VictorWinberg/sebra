// material-ui
import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { MRT_Row, MRT_RowData, MRT_TableInstance, MRT_TableOptions } from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import { DataTableProps } from '@/hooks/useDataTable';
import DataTableDesktop from './DataTableDesktop';
import DataTableMobile from './DataTableMobile';
import DeleteConfirm from './DeleteConfirm';

// assets
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = <T extends Record<string, unknown>>(props: DataTableProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <DataTableMobile {...props} /> : <DataTableDesktop {...props} />;
};

export const CustomActions = <T extends MRT_RowData>() => {
  return ({ table }: { table: MRT_TableInstance<T> }) => (
    <IconButton onClick={() => table.setCreatingRow(true)}>
      <AddIcon />
    </IconButton>
  );
};

export interface CustomProps<T extends Record<string, unknown>> {
  editDisplayMode: MRT_TableOptions<T>['editDisplayMode'];
  setEditDisplayMode: (mode: MRT_TableOptions<T>['editDisplayMode']) => void;
}

export const RowActions = <T extends MRT_RowData>(props: DataTableProps<T>, custom: CustomProps<T>) => {
  return ({ row, table }: { row: MRT_Row<T>; table: MRT_TableInstance<T> }) => (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Tooltip title="Edit">
        <IconButton onClick={() => [table.setEditingRow(row), custom.setEditDisplayMode('modal')]}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <DeleteConfirm
        id={row.id}
        onClick={() => {
          props.onDelete?.(row.original);
          table.setEditingRow(null);
        }}
      >
        {(popupState) => (
          <Tooltip title="Delete">
            <IconButton color="error" {...bindTrigger(popupState)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </DeleteConfirm>
    </Box>
  );
};

export default DataTable;
