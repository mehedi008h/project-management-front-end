import { create } from "zustand";

interface TaskStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    projectIdentifier: string;

    setProjectIdentifier: (identifier: string) => void;

    // update
    isOpenUpdate: boolean;
    onOpenUpdate: () => void;
    onCloseUpdate: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
    isOpen: false,
    projectIdentifier: "",
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setProjectIdentifier: (identifier) =>
        set(() => ({ projectIdentifier: identifier })),

    // update
    isOpenUpdate: false,
    onOpenUpdate: () => set({ isOpenUpdate: true }),
    onCloseUpdate: () => set({ isOpenUpdate: false }),
}));

export default useTaskStore;
