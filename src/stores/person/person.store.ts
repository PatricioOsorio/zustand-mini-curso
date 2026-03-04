import { LOCAL_STORAGE_KEY } from '@utils/constants';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IPerson {
  firstName: string;
  lastName: string;
}

export interface IActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export type IPersonState = IPerson & IActions;

export const usePersonState = create<IPersonState>()(
  persist(
    (set) => ({
      firstName: '',
      lastName: '',

      setFirstName: (value) => set((state) => ({ firstName: value })),
      setLastName: (value) => set((state) => ({ lastName: value })),
    }),
    {
      name: LOCAL_STORAGE_KEY.PERSON,
    }
  )
);
