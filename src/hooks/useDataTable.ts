// third-party
import { MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_SV } from 'material-react-table/locales/sv';

export interface DataTableProps<T extends Record<string, unknown>> extends MRT_TableOptions<T> {
  onCreate?: (row: T) => void;
  onUpdate?: (row: T, prev: T) => void;
  onDelete?: (row: T) => void;
}

export const useDataTable = <T extends Record<string, unknown>>(props: DataTableProps<T>) => {
  return useMaterialReactTable<T>({
    createDisplayMode: 'modal', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
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
    localization: MRT_Localization_SV,
    onCreatingRowSave: ({ row, values, table }) => {
      props.onCreate?.({ ...row.original, ...values } as T);
      table.setCreatingRow(null);
    },
    onEditingRowSave: ({ row, values, table }) => {
      props.onUpdate?.({ ...row.original, ...values } as T, row.original);
      table.setEditingRow(null);
    },
    muiFilterTextFieldProps: { sx: { minWidth: 0 } },
    muiEditRowDialogProps: { open: true, maxWidth: 'md' },
    ...props
  });
};
