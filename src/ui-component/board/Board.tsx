import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// material-ui
import { BoxProps } from '@mui/material';

// third-party
import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { arrayMove, hasSortableData, SortableData } from '@dnd-kit/sortable';

// project imports
import { hasDraggableData } from '@/utils/dnd';
import FlexGrow from '../extended/FlexGrow';
import { BoardColumn, BoardContainer } from './BoardColumn';
import BoardCard, { type Task } from './BoardCard';

interface BoardProps extends BoxProps {
  columns: string[];
  _tasks: Task[];
  _onDragEnd?: (task: Task, meta: SortableData) => void;
}

const Board = ({ columns, _tasks, _onDragEnd, ...rest }: BoardProps) => {
  const [tasks, setTasks] = useState<Task[]>(_tasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  useEffect(() => setTasks(_tasks), [_tasks]);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  return (
    <FlexGrow {...rest}>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver} sensors={sensors}>
        <BoardContainer>
          {columns.map((col) => (
            <BoardColumn key={col} column={col} tasks={tasks.filter((task) => task.columnId === col)} />
          ))}
        </BoardContainer>

        {'document' in window &&
          createPortal(
            <DragOverlay>{activeTask && <BoardCard task={activeTask} isOverlay />}</DragOverlay>,
            document.body
          )}
      </DndContext>
    </FlexGrow>
  );

  function onDragStart(event: DragStartEvent) {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;

    if (data?.type === 'Task') {
      setActiveTask(data.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    if (!hasSortableData(active)) return;

    const activeData = active.data.current;
    const isActiveATask = activeData?.type === 'Task';

    if (!isActiveATask || !activeTask) return;

    _onDragEnd?.(activeTask, activeData);
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === 'Task';
    const isOverATask = overData?.type === 'Task';
    const isOverAColumn = overData?.type === 'Column';

    if (!isActiveATask) return;

    // Dragging a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        const activeTask = tasks[activeIndex];
        const overTask = tasks[overIndex];
        if (activeTask && overTask && activeTask.columnId !== overTask.columnId) {
          activeTask.columnId = overTask.columnId;
          return arrayMove(tasks, activeIndex, Math.max(overIndex - 1, 0));
        }
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    // Dragging a Task over a Column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const activeTask = tasks[activeIndex];
        if (activeTask) {
          activeTask.columnId = overId.toString();
          return arrayMove(tasks, activeIndex, activeIndex);
        }
        return tasks;
      });
    }
  }
};

export default Board;
