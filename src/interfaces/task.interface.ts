export interface ITask {
  id: string;
  title: string;
  description: string;
  status: ITaskStatus;
}

export type ITaskStatus = 'done' | 'open' | 'in-progress';
