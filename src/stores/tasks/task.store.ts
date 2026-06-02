import { ITask, ITaskStatus } from '@interfaces/task.interface';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { immer } from 'zustand/middleware/immer';
import { LOCAL_STORAGE_KEY } from '@utils/constants';

type ITaskRecord = Record<string, ITask>;
type INewTask = Omit<ITask, 'id'>;
type IStoreApi = StateCreator<ITaskState, [['zustand/devtools', never], ['zustand/immer', never]]>;

export interface ITaskState {
  draggingTaskId?: string;
  tasks: ITaskRecord;

  getTaskByStatus: (status: ITaskStatus) => ITask[];
  addTask: (partialTask: INewTask) => void;

  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
  changeStatus: (taskId: string, status: ITaskStatus) => void;
  onTaskDrop: (status: ITaskStatus) => void;
}

export interface ITaskActions {}

const storeApi: IStoreApi = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    'TASK-1': {
      id: 'TASK-1',
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'open',
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
      status: 'done',
    },
    'TASK-4': {
      id: 'TASK-4',
      title: 'Task 4',
      description: 'Description for Task 4',
      status: 'open',
    },
  },

  getTaskByStatus: (status: ITaskStatus) => {
    const tasks = get().tasks;

    return Object.values(tasks).filter((task) => task.status === status);
  },

  addTask(partialTask: INewTask) {
    const newTask: ITask = {
      id: uuid(),
      title: partialTask.title,
      status: partialTask.status,
      description: partialTask.description,
    };

    // ? Native
    // set((s) => ({ tasks: { ...s.tasks, [id]: newTask } }));

    // ? Immer
    // set(
    //   produce((s: ITaskState) => {
    //     s.tasks[id] = newTask;
    //   }),
    // );

    // ? Middleware
    set((s) => {
      s.tasks[newTask.id] = newTask;
    });
  },

  setDraggingTaskId(taskId: string) {
    set({ draggingTaskId: taskId });
  },

  removeDraggingTaskId() {
    set({ draggingTaskId: undefined });
  },

  changeStatus(taskId: string, status: ITaskStatus) {
    const task = get().tasks[taskId];

    // ? Native
    // set((state) => ({ tasks: { ...state.tasks, [taskId]: task } }));

    // ? Immer
    set((s) => {
      s.tasks[task.id].status = status;
    });
  },

  onTaskDrop(status: ITaskStatus) {
    const taskId = get().draggingTaskId;
    if (!taskId) return;

    get().changeStatus(taskId, status);
    get().removeDraggingTaskId();
  },
});

export const useTaskStore = create<ITaskState>()(
  devtools(persist(immer(storeApi), { name: LOCAL_STORAGE_KEY.TASK })),
);
