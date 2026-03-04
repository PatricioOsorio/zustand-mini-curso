import { create } from 'zustand';

export interface IBear {
  id: number;
  name: string;
}

export interface IBearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: IBear[];

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
}

const initialBears: IBear[] = [
  { id: 1, name: 'Baloo' },
  { id: 2, name: 'Yogi' },
  { id: 3, name: 'Paddington' },
];

export const useBearStore = create<IBearState>()((set) => ({
  blackBears: 1,
  polarBears: 5,
  pandaBears: 10,

  bears: initialBears,

  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
}));
