import { useState } from 'react';

// material-ui
import { MaterialReactTable, type MRT_TableOptions } from 'material-react-table';

// project imports
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import { FilterParam, StringParam, useQueryParam } from '@/hooks/useQueryParam';
import { CustomActions, CustomProps, RowActions } from './DataTable';
import { sxFlex } from './extended/FlexGrow';

const DataTableDesktop = <T extends Record<string, unknown>>({
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

export default DataTableDesktop;
