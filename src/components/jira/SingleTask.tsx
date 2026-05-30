import { ITask } from '@interfaces/task.interface';
import { useTaskStore } from '@stores/tasks/task.store';
import { IoReorderTwoOutline } from 'react-icons/io5';

export interface ISingleTaskProps {
  task: ITask;
}

export const SingleTask: React.FC<ISingleTaskProps> = ({ task }) => {
  const setDraggingTaskId = useTaskStore((state) => state.setDraggingTaskId);
  const removeDraggingTaskId = useTaskStore((state) => state.removeDraggingTaskId);

  const handleDragStart = () => {
    setDraggingTaskId(task.id);
  };

  const handleDragEnd = () => {
    removeDraggingTaskId();
  };

  return (
    <div
      draggable={true}
      className="mt-5 flex items-center justify-between p-2"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold text-navy-700">{task.title}</p>
      </div>
      <span className=" h-6 w-6 text-navy-700 cursor-pointer">
        <IoReorderTwoOutline />
      </span>
    </div>
  );
};
