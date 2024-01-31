import create, { useStore } from "zustand";

import { IUser } from "../api/types";
// TypeScript types for the Zustand store
// Store has items we want to manage state by zsutand.
type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
};

//  A hook that has a lot of properties and methods for managing the Zustand store.
// TODO: get rid og depricating function
const userStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
}));

export default useStore;
