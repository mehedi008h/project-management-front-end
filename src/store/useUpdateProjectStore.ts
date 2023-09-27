import { create } from "zustand";

interface UpdateProjectStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUpdateProjectStore = create<UpdateProjectStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUpdateProjectStore;
