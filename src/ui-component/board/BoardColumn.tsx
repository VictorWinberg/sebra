import { CSSProperties, useMemo } from 'react';

// material-ui
import { Box, Card, CardContent, CardHeader, Grid, IconButton, SxProps } from '@mui/material';

// third-party
import { useDndContext, type UniqueIdentifier } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// project imports
import { ScrollArea, ScrollBar } from '@/ui-component/ScrollArea';
import { Task, TaskCard } from './TaskCard';
import FlexGrow, { sxFlex } from '../extended/FlexGrow';

// assets
import { MoreVert } from '@mui/icons-material';

export interface Column {
  id: UniqueIdentifier;
  title: string;
}

export type ColumnType = 'Column';

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

export function BoardColumn({ column, tasks, isOverlay }: BoardColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: { type: 'Column', column } satisfies ColumnDragData,
    attributes: { roleDescription: 'Column' }
  });

  const sx: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isOverlay ? 0.5 : isDragging ? 0.3 : 1,
    border: isOverlay || isDragging ? '2px solid primary' : 'none',
    height: '100%',
    maxHeight: '100%',
    minWidth: '100px',
    maxWidth: '100%',
    bgcolor: 'primary.light'
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} height="100%">
      <Card ref={setNodeRef} sx={sx}>
        <CardHeader
          sx={{ borderBottom: '0.5px solid' }}
          title={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Box component="span">{column.title}</Box>
              <IconButton
                {...attributes}
                {...listeners}
                sx={{
                  padding: 1,
                  color: 'primary.main',
                  cursor: 'grab'
                }}
              >
                <MoreVert />
              </IconButton>
            </Box>
          }
        />
        <ScrollArea style={{ ...sxFlex }}>
          <FlexGrow sx={{ height: '100%' }}>
            <CardContent sx={{ ...sxFlex, gap: 2, height: 0 }}>
              <SortableContext items={tasksIds}>
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
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
