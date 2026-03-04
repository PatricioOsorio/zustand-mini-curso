import { create } from 'zustand';

export interface IBearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
}

export const useBearStore = create<IBearState>()((set) => ({
  blackBears: 1,
  polarBears: 5,
  pandaBears: 10,
  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
}));
