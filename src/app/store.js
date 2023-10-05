import { create } from 'zustand';

const useStore = create((set) => ({
    location: "Home",
    setLocation: () => set((data) => ({ location: data }))
  }))

export default useStore;