import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface countStore {
  count: number;
  increment: (no: number) => void;
  decrement: (no: number) => void;
}

const useCountStore = create<countStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: (no) => set((state) => ({ count: state.count + 1 })),
        decrement: (no) =>
          set((state) => {
            return { count: state.count > 0 ? state.count - 1 : 0 };
          }),
      }),
      {
        name: "count-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useCountStore;
