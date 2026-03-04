import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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

type IPersonState = IPerson & IActions;

type IPersonStoreCreator = StateCreator<
  IPersonState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
>;

const personStoreApi: IPersonStoreCreator = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value) => set({ firstName: value }, undefined, 'person/setFirstName'),
  setLastName: (value) => set({ lastName: value }, undefined, 'person/setLastName'),
});

export const usePersonState = create<IPersonState>()(
  devtools(
    persist(personStoreApi, {
      name: FIREBASE_STORAGE_KEY.PERSON,
      storage: firebaseStorage,
    })
  )
);
