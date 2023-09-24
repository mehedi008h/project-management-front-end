import { create } from "zustand";

interface SidebarStore {
    toogle: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
    toogle: true,
    onOpen: () => set({ toogle: true }),
    onClose: () => set({ toogle: false }),
}));

export default useSidebar;
