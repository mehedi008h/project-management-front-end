import { create } from "zustand";

interface ProjectQuery {
    developerIdentifier?: string;
    tag?: string;
    searchText?: string;
}
interface ProjectQueryStore {
    projectId: string;
    taskId: string;
    projectQuery: ProjectQuery;

    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    setSearchText: (searchText: string) => void;
    setDeveloperIdentifier: (developerIdentifier: string) => void;
    setTag: (tag: string) => void;
    clearSearchText: () => void;
    clearFilter: () => void;
}

const useProjectStore = create<ProjectQueryStore>((set) => ({
    projectId: "",
    taskId: "",
    projectQuery: {},
    open: false,

    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

    setSearchText: (searchText) =>
        set(() => ({ projectQuery: { searchText } })),
    setDeveloperIdentifier: (developerIdentifier) =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                developerIdentifier,
                searchText: undefined,
            },
        })),
    setTag: (tag) =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                tag,
                searchText: undefined,
            },
        })),
    clearSearchText: () =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                searchText: undefined,
            },
        })),
    clearFilter: () =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                tag: undefined,
                developerIdentifier: undefined,
            },
        })),
}));

export default useProjectStore;
