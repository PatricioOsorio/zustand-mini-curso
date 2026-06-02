import { DragEvent, useState } from 'react';
import Swal from 'sweetalert2';

import { useTaskStore } from '@stores/tasks/task.store';
import { ITaskStatus } from '@interfaces/task.interface';

export interface IUseJiraTask {
  status: ITaskStatus;
}

export const useJiraTask = ({ status }: IUseJiraTask) => {
  const onTaskDrop = useTaskStore((s) => s.onTaskDrop);
  const isDragging = useTaskStore((s) => !!s.draggingTaskId);
  const addTask = useTaskStore((s) => s.addTask);

  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsOver(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsOver(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsOver(false);
    onTaskDrop(status);
  };

  const showNewTaskModal = async () =>
    Swal.fire({
      title: 'Nueva tarea',
      input: 'text',
      inputLabel: 'Nombre de la tarea',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) return 'Debe ingrsar nombre de tarea';
      },
    });

  const handleAddTask = async () => {
    const { isConfirmed, value } = await showNewTaskModal();

    if (!isConfirmed)
      return Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        title: 'Cancelado',
        timer: 3000,
        timerProgressBar: true,
        icon: 'error',
      });

    addTask({
      title: value,
      status: status,
      description: 'Description',
    });
  };

  return {
    // Props
    isDragging,
    isOver,

    // Handlers
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleAddTask,
  };
};
