import { create } from 'zustand';

export interface IPerson {
  firstName: string;
  lastName: string;
}

export interface IActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export type IPersonState = IPerson & IActions;

export const usePersonState = create<IPersonState>()((set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value) => set((state) => ({ firstName: value })),
  setLastName: (value) => set((state) => ({ lastName: value })),
}));
