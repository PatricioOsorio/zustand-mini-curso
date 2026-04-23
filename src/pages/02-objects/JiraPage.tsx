import { useTaskStore } from '@stores/tasks/task.store';
import { JiraTasks } from '../../components';

export const JiraPage = () => {
  const getTaskByStatus = useTaskStore((s) => s.getTaskByStatus);

  const inProgress = getTaskByStatus('in-progress');
  const open = getTaskByStatus('open');
  const done = getTaskByStatus('done');

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" value="open" tasks={open} />

        <JiraTasks title="Avanzando" value="in-progress" tasks={inProgress} />

        <JiraTasks title="Terminadas" value="done" tasks={done} />
      </div>
    </>
  );
};
