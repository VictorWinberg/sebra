// material-ui
import { Paper, SxProps } from '@mui/material';

// third-party
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface Task {
  id: string;
  columnId: string;
  content: React.ReactNode;
}

interface BoardCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = 'Task';

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

const BoardCard = ({ task, isOverlay }: BoardCardProps) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: 'Task', task } satisfies TaskDragData,
    attributes: { roleDescription: 'Task' }
  });

  const sx: SxProps = {
    border: isOverlay || isDragging ? '1px solid grey' : 'none',
    flexShrink: 0,
    opacity: isOverlay ? 0.5 : isDragging ? 0.3 : 1,
    p: 2,
    transform: CSS.Translate.toString(transform),
    transition,
    whiteSpace: 'pre-wrap',
    cursor: 'grab',
    touchAction: 'none'
  };

  return (
    <Paper {...attributes} {...listeners} ref={setNodeRef} sx={sx} elevation={1}>
      {task.content}
    </Paper>
  );
};

export default BoardCard;
