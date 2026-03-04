import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

import { FIREBASE_STORAGE_KEY } from '@utils/constants';
import { firebaseStorage } from '@stores/storages/firebase.storage';

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

export const usePersonState = create<IPersonState>()(
  persist(personStoreApi, {
    name: FIREBASE_STORAGE_KEY.PERSON,
    storage: firebaseStorage,
  })
);
