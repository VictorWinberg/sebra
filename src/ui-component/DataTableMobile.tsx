import { useState } from 'react';

// material-ui
import { Box, Card, CardContent, Typography } from '@mui/material';
import { MRT_EditRowModal, MRT_TableBodyCell, MRT_TableOptions, MRT_TopToolbar } from 'material-react-table';

// project imports
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import { CustomActions, CustomProps, RowActions } from './DataTable';

const DataTableMobile = <T extends Record<string, unknown>>({
  editDisplayMode: _editDisplayMode = 'row',
  ...props
}: DataTableProps<T>) => {
  const [editDisplayMode, setEditDisplayMode] = useState<MRT_TableOptions<T>['editDisplayMode']>(_editDisplayMode);
  const custom: CustomProps<T> = { editDisplayMode, setEditDisplayMode };

  const table = useDataTable<T>({
    editDisplayMode,
    enableColumnFilters: false,
    enableDensityToggle: false,
    positionActionsColumn: 'last',
    renderRowActions: RowActions<T>(props, custom),
    ...props,
    // Overrides for mobile
    renderTopToolbarCustomActions: CustomActions<T>()
  });

  // Can we do a better fix for this?
  if (table.getState().isLoading) return null;

  const { creatingRow, editingRow } = table.getState();
  const { rows } = table.getRowModel();

  return (
    <Box>
      <MRT_TopToolbar table={table} />
      {rows.map((row) => (
        <Card key={row.id} variant="outlined" sx={{ my: 1 }}>
          <CardContent sx={{ py: 1 }}>
            {row.getVisibleCells().map((cell) => {
              return (
                <Box sx={{ my: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }} key={cell.id}>
                  <Typography variant="body2" fontWeight={600}>
                    {cell.column.columnDef.header}:
                  </Typography>
                  <MRT_TableBodyCell
                    component={Box}
                    table={table}
                    cell={cell}
                    rowRef={null!}
                    staticRowIndex={row.index}
                    sx={{ p: 0, border: 0 }}
                  />
                </Box>
              );
            })}
          </CardContent>
        </Card>
      ))}
      {(creatingRow || (editDisplayMode === 'modal' && editingRow)) && <MRT_EditRowModal open table={table} />}
    </Box>
  );
};

export default DataTableMobile;
