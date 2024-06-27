import { useState } from 'react';

// material-ui
import { Box, Button, Card, CardActions, CardContent, IconButton, Popover, Tooltip, Typography } from '@mui/material';

// third-party
import {
  MRT_RowData,
  MRT_TableInstance,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  type MRT_TableOptions
} from 'material-react-table';
import { MRT_Localization_SV } from 'material-react-table/locales/sv';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { sxFlex } from './extended/FlexGrow';

// assets
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface DataTableProps<T extends Record<string, unknown>> extends MRT_TableOptions<T> {
  onCreate?: (row: T) => void;
  onUpdate?: (row: T) => void;
  onDelete?: (row: T) => void;
}

interface CustomProps<T extends Record<string, unknown>> {
  editDisplayMode: MRT_TableOptions<T>['editDisplayMode'];
  setEditDisplayMode: (mode: MRT_TableOptions<T>['editDisplayMode']) => void;
}

const DataTable = <T extends Record<string, unknown>>({
  editDisplayMode: _editDisplayMode = 'row',
  ...props
}: DataTableProps<T>) => {
  const [editDisplayMode, setEditDisplayMode] = useState<MRT_TableOptions<T>['editDisplayMode']>(_editDisplayMode);
  const custom: CustomProps<T> = { editDisplayMode, setEditDisplayMode };

  const table = useMaterialReactTable<T>({
    createDisplayMode: 'modal', // ('modal', and 'custom' are also available)
    editDisplayMode, // ('modal', 'cell', 'table', and 'custom' are also available)
    layoutMode: 'grid',
    enableBottomToolbar: false,
    enableColumnActions: false,
    enableColumnFilters: true,
    enableColumnResizing: true,
    enableDensityToggle: true,
    enableEditing: true,
    enableFacetedValues: true,
    enableFullScreenToggle: false,
    enableHiding: false,
    enablePagination: false,
    enableRowActions: true,
    enableRowVirtualization: true,
    enableStickyHeader: true,
    defaultColumn: {
      size: 120, // default 180
      minSize: 40, // default 40
      maxSize: 1000 // default 1000
    },
    displayColumnDefOptions: {
      'mrt-row-actions': { minSize: 120, size: 120, maxSize: 120, grow: false }
    },
    localization: MRT_Localization_SV,
    renderRowActions: RowActions<T>(props, custom),
    positionActionsColumn: 'last',
    renderTopToolbarCustomActions: CustomActions<T>(),
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
    muiTablePaperProps: {
      sx: { ...sxFlex, mx: -1, boxShadow: 0 }
    },
    muiTableContainerProps: {
      sx: { ...sxFlex, height: '300px' }
    },
    muiFilterTextFieldProps: {
      sx: { minWidth: 0 }
    },
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
      <PopupState variant="popover" popupId={`delete-popup-${row.id}`}>
        {(popupState) => (
          <>
            <Tooltip title="Delete">
              <IconButton color="error" {...bindTrigger(popupState)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Card>
                <CardContent>
                  <Typography variant="body1">Är du säker på att du vill ta bort denna rad?</Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth onClick={popupState.close} color="inherit" variant="outlined">
                    Avbryt
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => [props.onDelete?.(row.original), popupState.close()]}
                    color="error"
                    variant="contained"
                  >
                    Ta bort
                  </Button>
                </CardActions>
              </Card>
            </Popover>
          </>
        )}
      </PopupState>
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
