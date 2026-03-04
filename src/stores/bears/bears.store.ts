import { LOCAL_STORAGE_KEY } from '@utils/constants';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IBear {
  id: number;
  name: string;
}

export interface IBearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: IBear[];

  totalBears: () => number;

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: (bear: IBear) => void;
  clearBears: () => void;
}

const initialBears: IBear[] = [
  { id: 1, name: 'Baloo' },
  { id: 2, name: 'Yogi' },
  { id: 3, name: 'Paddington' },
];

const berarStoreApi: StateCreator<IBearState> = (set, get) => ({
  blackBears: 1,
  polarBears: 5,
  pandaBears: 10,

  bears: initialBears,

  totalBears: () => {
    const total = get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
    return total;
  },

  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBear: (bear) => set((state) => ({ bears: [...state.bears, bear] })),
  clearBears: () => set({ bears: [] }),
});

export const useBearStore = create<IBearState>()(
  persist(berarStoreApi, {
    name: LOCAL_STORAGE_KEY.BEAR,
  })
);
