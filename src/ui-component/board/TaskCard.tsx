import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent, CardHeader, Chip, SxProps } from '@mui/material';

import { ColumnId } from './KanbanBoard';

export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = 'Task';

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay }: TaskCardProps) {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: 'Task', task } satisfies TaskDragData,
    attributes: { roleDescription: 'Task' }
  });

  const sx: SxProps = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isOverlay ? 0.5 : isDragging ? 0.3 : 1,
    border: isOverlay || isDragging ? '2px solid primary' : 'none',
    flexShrink: 0
  };

  return (
    <Card ref={setNodeRef} sx={sx}>
      <CardHeader
        {...attributes}
        {...listeners}
        title={<Chip label="Task" color="primary" size="small" variant="outlined" />}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '2px solid secondary',
          position: 'relative',
          cursor: 'grab'
        }}
      />
      <CardContent sx={{ p: 2, whiteSpace: 'pre-wrap' }}>{task.content}</CardContent>
    </Card>
  );
}
