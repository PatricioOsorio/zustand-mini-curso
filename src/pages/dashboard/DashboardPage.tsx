import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5';
import { WhiteCard } from '../../components';
import { useBearStore } from '@stores/bears/bears.store';
import { usePersonState } from '@stores/person/person.store';
import { useTaskStore } from '@stores/tasks/task.store';

export const Dashboard = () => {
  const totalBears = useBearStore((s) => s.totalBears);
  const firstName = usePersonState((s) => s.firstName);
  const totalTasks = useTaskStore((s) => s.totalTasks);

  const items = [
    {
      title: 'Osos',
      icon: <IoPawOutline className="text-indigo-600" size={50} />,
      value: totalBears(),
    },
    {
      title: 'Persona',
      icon: <IoAccessibilityOutline className="text-indigo-600" size={50} />,
      value: firstName,
    },
    {
      title: 'Tareas',
      icon: <IoListOutline className="text-indigo-600" size={50} />,
      value: totalTasks(),
    },
    {
      title: 'Boda',
      icon: <IoHeartOutline className="text-indigo-600" size={50} />,
      value: 'Información',
    },
    {
      title: 'Auth',
      icon: <IoLockClosedOutline className="text-indigo-600" size={50} />,
      value: 'Información',
    },
  ];
  
  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <WhiteCard key={item.title} centered>
            {item.icon}
            <h2>{item.title}</h2>
            <p>{item.value}</p>
          </WhiteCard>
        ))}
      </div>
    </>
  );
};
