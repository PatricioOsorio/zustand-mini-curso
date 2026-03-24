import { ITask } from '@interfaces/task.interface';
import { create, StateCreator } from 'zustand';

type ITaskRecord = Record<string, ITask>;

export interface ITaskState {
  tasks: ITaskRecord;
}

export interface ITaskActions {}

const storeApi: StateCreator<ITaskState> = (set) => ({
  tasks: {
    'TASK-1': {
      id: 'TASK-1',
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'pending',
    },
    'TASK-2': {
      id: 'TASK-2',
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'in-progress',
    },
    'TASK-3': {
      id: 'TASK-3',
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'completed',
    },
  },
});

export const useTaskStore = create<ITaskState>()(storeApi);
