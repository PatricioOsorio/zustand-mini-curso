import { useTaskStore } from '@stores/tasks/task.store';
import { JiraTasks } from '../../components';
import { useMemo } from 'react';

export const JiraPage = () => {
  const tasks = useTaskStore((s) => s.tasks);

  const { open, inProgress, done } = useMemo(() => {
    const allTasks = Object.values(tasks);

    return {
      open: allTasks.filter((task) => task.status === 'open'),
      inProgress: allTasks.filter((task) => task.status === 'in-progress'),
      done: allTasks.filter((task) => task.status === 'done'),
    };
  }, [tasks]);

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <JiraTasks tasks={open} title="Pendientes" value="open" />

        <JiraTasks tasks={inProgress} title="Avanzando" value="in-progress" />

        <JiraTasks tasks={done} title="Terminadas" value="done" />
      </div>
    </>
  );
};
