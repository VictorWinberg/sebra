import { useState } from 'react';

// material-ui
import { Box, IconButton, Tooltip } from '@mui/material';
import {
  MRT_RowData,
  MRT_TableInstance,
  MaterialReactTable,
  type MRT_Row,
  type MRT_TableOptions
} from 'material-react-table';
import { bindTrigger } from 'material-ui-popup-state';

// project imports
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import { FilterParam, StringParam, useQueryParam } from '@/hooks/useQueryParam';
import DeleteConfirm from './DeleteConfirm';
import { sxFlex } from './extended/FlexGrow';

// assets
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface CustomProps<T extends Record<string, unknown>> {
  editDisplayMode: MRT_TableOptions<T>['editDisplayMode'];
  setEditDisplayMode: (mode: MRT_TableOptions<T>['editDisplayMode']) => void;
}

const DataTable = <T extends Record<string, unknown>>({
  editDisplayMode: _editDisplayMode = 'row',
  state,
  ...props
}: DataTableProps<T>) => {
  const [columnFilters, setColumnFilters] = useQueryParam('filters', FilterParam, []);
  const [globalFilter, setGlobalFilter] = useQueryParam('search', StringParam, '');
  const [editDisplayMode, setEditDisplayMode] = useState<MRT_TableOptions<T>['editDisplayMode']>(_editDisplayMode);
  const custom: CustomProps<T> = { editDisplayMode, setEditDisplayMode };

  const table = useDataTable<T>({
    editDisplayMode,
    initialState: { showGlobalFilter: !!globalFilter },
    state: { columnFilters, globalFilter, ...state },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onCreatingRowSave: async ({ row, values, table }) => {
      await props.onCreate?.({ ...row.original, ...values } as T);
      table.setCreatingRow(null);
      setEditDisplayMode(_editDisplayMode);
    },
    onEditingRowSave: async ({ row, values, table }) => {
      await props.onUpdate?.({ ...row.original, ...values } as T);
      table.setEditingRow(null);
      setEditDisplayMode(_editDisplayMode);
    },
    displayColumnDefOptions: {
      'mrt-row-actions': { minSize: 120, size: 120, maxSize: 120, grow: false }
    },
    muiTablePaperProps: { sx: { ...sxFlex, mx: -1, boxShadow: 0 } },
    muiTableContainerProps: { sx: { ...sxFlex, height: '300px' } },
    positionActionsColumn: 'last',
    renderRowActions: RowActions<T>(props, custom),
    renderTopToolbarCustomActions: CustomActions<T>(),
    muiTableBodyCellProps: ({ row, column, table }) => ({
      onDoubleClick: () => {
        setEditDisplayMode('row');
        table.setEditingRow(table.getState().editingRow === row ? null : row);

        queueMicrotask(() => {
          const field = table.refs.editInputRefs.current[column.id];
          field?.focus();
        });
      },
      onKeyDown: (event) => {
        if (event.key === 'Escape') {
          table.setEditingRow(null);
        }

        if (event.key === 'Enter') {
          table.options.onEditingRowSave?.({
            exitEditingMode: () => table.setEditingRow(null),
            row,
            table,
            values: row?._valuesCache
          });
        }
      }
    }),
    ...props
  });

  return <MaterialReactTable table={table} />;
};

const RowActions = <T extends MRT_RowData>(props: DataTableProps<T>, custom: CustomProps<T>) => {
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

const CustomActions = <T extends MRT_RowData>() => {
  return ({ table }: { table: MRT_TableInstance<T> }) => (
    <IconButton
      onClick={() => {
        table.setCreatingRow(true); //simplest way to open the create row modal with no default values

        //or you can pass in a row object to set default values with the `createRow` helper function
        // table.setCreatingRow(
        //   createRow(table, {
        //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
        //   }),
        // );
      }}
    >
      <AddIcon />
    </IconButton>
  );
};

export default DataTable;
