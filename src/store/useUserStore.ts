import { create } from "zustand";

interface UserQuery {
    searchText?: string;
}

interface UserQueryStore {
    type: string;
    userQuery: UserQuery;
    setSearchText: (searchText: string) => void;
}

const useUserStore = create<UserQueryStore>((set) => ({
    type: "",
    userQuery: {},
    setSearchText: (searchText) => set(() => ({ userQuery: { searchText } })),
}));

export default useUserStore;
