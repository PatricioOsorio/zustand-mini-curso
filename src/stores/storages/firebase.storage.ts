import { createJSONStorage, StateStorage } from 'zustand/middleware';

import { FIREBASE_BASE_URL } from '@utils/constants';

const firebaseRaw: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const res = await fetch(`${FIREBASE_BASE_URL}/${name}.json`);
      const data = await res.json();

      console.log('getItem', { data });
      // return data;
      return JSON.stringify(data);
    } catch (error) {
      console.error(`Error fetching data for ${name}:`, error);
      return null;
    }
  },

  setItem: async function (name: string, value: string): Promise<void> {
    const res = await fetch(`${FIREBASE_BASE_URL}/${name}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(value),
      body: value,
    });

    console.log('setItem', { res });

    if (!res.ok) {
      console.error(`Error saving data for ${name}:`, res.statusText);
    }
  },

  removeItem: function (name: string): void {
    console.log(`removeItem: `, name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseRaw);
