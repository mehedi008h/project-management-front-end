import { create } from "zustand";

interface TaskStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    // update
    isOpenUpdate: boolean;
    onOpenUpdate: () => void;
    onCloseUpdate: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

    // update
    isOpenUpdate: false,
    onOpenUpdate: () => set({ isOpenUpdate: true }),
    onCloseUpdate: () => set({ isOpenUpdate: false }),
}));

export default useTaskStore;
