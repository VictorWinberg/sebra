/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

// material-ui
import { Box, IconButton } from '@mui/material';

// third-party
import { MRT_EditRowModal, MRT_Row, MRT_TableInstance } from 'material-react-table';

// project imports
import { Maybe } from '@/api/gql/graphql';
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import Board from './Board';

// assets
import { Add } from '@mui/icons-material';

interface DataBoardProps<T extends Record<string, unknown>> extends DataTableProps<T> {
  stages: string[];
  columnId: keyof T;
  renderCard: (props: { row: MRT_Row<T>; table: MRT_TableInstance<T> }) => React.ReactNode;
}

const DataBoard = <T extends { rank?: Maybe<number> } & Record<string, unknown>>({
  data,
  stages,
  columnId,
  ...props
}: DataBoardProps<T>) => {
  const table = useDataTable<T>({ data, ...props });

  // Can we do a better fix for this?
  if (table.getState().isLoading) return null;

  const { creatingRow, editingRow } = table.getState();
  const { rows } = table.getRowModel();

  return (
    <>
      <Box sx={{ my: 1 }}>
        {props.renderTopToolbarCustomActions?.({ table }) ?? (
          <IconButton onClick={() => table.setCreatingRow(true)}>
            <Add />
          </IconButton>
        )}
      </Box>

      <Board
        sx={{ minHeight: 500 }}
        columns={stages}
        _tasks={rows.map((row) => ({
          id: row.id,
          columnId: String(row.original[columnId]),
          content: props.renderCard({ row, table })
        }))}
        _onDragEnd={(task, meta) => {
          meta.sortable.items.forEach((id, index) => {
            const row = table.getRow(String(id))?.original;
            if (!row) return;

            props.onUpdate?.({ ...row, [columnId]: task.columnId, rank: index }, row);
          });
        }}
      />

      {(creatingRow || editingRow) && <MRT_EditRowModal open table={table} />}
    </>
  );
};

export default memo(DataBoard, (prevProps, nextProps) => {
  return (
    prevProps.data === nextProps.data &&
    prevProps.stages === nextProps.stages &&
    prevProps.columnId === nextProps.columnId
  );
}) as typeof DataBoard;
