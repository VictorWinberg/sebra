import { CSSProperties, useMemo } from 'react';

// material-ui
import { Box, Card, CardContent, CardHeader, Grid, SxProps, Typography } from '@mui/material';

// third-party
import { useDndContext, useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

// project imports
import { ScrollArea, ScrollBar } from '@/ui-component/ScrollArea';
import FlexGrow, { sxFlex } from '../extended/FlexGrow';
import BoardCard, { Task } from './BoardCard';

export type ColumnType = 'Column';

export interface ColumnDragData {
  type: ColumnType;
  column: string;
}

interface BoardColumnProps {
  column: string;
  tasks: Task[];
}

export function BoardColumn({ column, tasks }: BoardColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef } = useDroppable({
    id: column,
    data: { type: 'Column', column } satisfies ColumnDragData
  });

  const sx: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    height: '100%',
    maxHeight: '100%',
    minWidth: '100px',
    maxWidth: '100%',
    bgcolor: 'grey.100'
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} height="100%">
      <Card ref={setNodeRef} sx={sx}>
        <CardHeader sx={{ pb: 0, ml: 1 }} title={<Typography variant="h5">{column}</Typography>} />
        <ScrollArea style={{ ...sxFlex }}>
          <FlexGrow sx={{ height: '100%' }}>
            <CardContent sx={{ ...sxFlex, gap: 2, height: 0 }}>
              <SortableContext items={tasksIds}>
                {tasks.map((task) => (
                  <BoardCard key={task.id} task={task} />
                ))}
              </SortableContext>
              <Box sx={{ pb: 1 }} />
            </CardContent>
          </FlexGrow>
        </ScrollArea>
      </Card>
    </Grid>
  );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
  const dndContext = useDndContext();

  const style: CSSProperties = {
    ...sxFlex,
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: dndContext.active ? 'none' : 'x mandatory'
  };

  return (
    <ScrollArea style={style}>
      <Grid container spacing={2} wrap="nowrap" sx={{ height: '100%' }}>
        {children}
      </Grid>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
