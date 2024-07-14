import { useDndContext, type UniqueIdentifier } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CSSProperties, useMemo } from 'react';

import { Box, Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { Task, TaskCard } from './TaskCard';
import { MoreVert } from '@mui/icons-material';
import { ScrollArea, ScrollBar } from '@/ui-component/ScrollArea';

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
    data: { type: 'Column', column } satisfies ColumnDragData
  });

  const sx: CSSProperties = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isOverlay ? 0.5 : isDragging ? 0.3 : 1,
    border: isOverlay || isDragging ? '2px solid primary' : 'none',
    height: '500px',
    maxHeight: '500px',
    width: '350px',
    maxWidth: '100%',
    backgroundColor: 'primary.light',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0
  };

  return (
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
                marginLeft: '-8px',
                cursor: 'grab'
              }}
            >
              <MoreVert />
            </IconButton>
          </Box>
        }
      />
      <ScrollArea>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
            flexGrow: 1
          }}
        >
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
  const dndContext = useDndContext();

  const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '16px',
    overflowX: 'auto',
    scrollSnapType: dndContext.active ? 'none' : 'x mandatory'
  };

  return (
    <ScrollArea style={style}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {children}
      </Box>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
