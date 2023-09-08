import { create } from "zustand";

interface UserQuery {
    type: string;
}

const useUserStore = create<UserQuery>(() => ({
    type: "",
}));

export default useUserStore;
