import { Active, DataRef, Over } from '@dnd-kit/core';

import { ColumnDragData } from '@/ui-component/board/BoardColumn';
import { TaskDragData } from '@/ui-component/board/BoardCard';

type DraggableData = ColumnDragData | TaskDragData;

export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined
): entry is T & {
  data: DataRef<DraggableData>;
} {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data?.type === 'Column' || data?.type === 'Task') {
    return true;
  }

  return false;
}
