import { create } from "zustand";

interface UserQuery {
    searchText?: string;
}

interface UserQueryStore {
    type: string;
    userQuery: UserQuery;
    isOpen: boolean;
    setSearchText: (searchText: string) => void;
    onOpen: () => void;
    onClose: () => void;
}

const useUserStore = create<UserQueryStore>((set) => ({
    type: "",
    userQuery: {},
    isOpen: false,
    setSearchText: (searchText) => set(() => ({ userQuery: { searchText } })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUserStore;
