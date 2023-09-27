import { create } from "zustand";

interface AssignQuery {
    searchText?: string;
}

interface AssignQueryStore {
    type: string;
    userQuery: AssignQuery;
    isOpen: boolean;
    setSearchText: (searchText: string) => void;
    onOpen: () => void;
    onClose: () => void;
}

const useAssignDeveloperStore = create<AssignQueryStore>((set) => ({
    type: "",
    userQuery: {},
    isOpen: false,
    setSearchText: (searchText) => set(() => ({ userQuery: { searchText } })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAssignDeveloperStore;
