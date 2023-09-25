import { create } from "zustand";

interface InviteStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useInviteStore = create<InviteStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useInviteStore;
