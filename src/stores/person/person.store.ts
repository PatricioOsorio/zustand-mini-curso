import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LOCAL_STORAGE_KEY } from '@utils/constants';
import { StateStorage } from 'zustand/middleware';

export interface IPerson {
  firstName: string;
  lastName: string;
}

export interface IActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export type IPersonState = IPerson & IActions;

const personStoreApi: StateCreator<IPersonState> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value) => set((state) => ({ firstName: value })),
  setLastName: (value) => set((state) => ({ lastName: value })),
});

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    console.log(`getItem: `, name);
    throw new Error('Function not implemented.');
  },
  setItem: function (name: string, value: string): unknown {
    console.log(`setItem: `, name, value);
    throw new Error('Function not implemented.');
  },
  removeItem: function (name: string): unknown {
    console.log(`removeItem: `, name);
    throw new Error('Function not implemented.');
  },
};

export const usePersonState = create<IPersonState>()(
  persist(personStoreApi, {
    name: LOCAL_STORAGE_KEY.PERSON,
    storage: createJSONStorage(() => sessionStorage),
  })
);
