import { create } from "zustand";

interface ProjectQuery {
    developerIdentifiers?: string[];
    tags?: string[];
    searchText?: string;
}
interface ProjectQueryStore {
    projectId: string;
    taskId: string;
    projectQuery: ProjectQuery;
    setSearchText: (searchText: string) => void;
    setDeveloperIdentifiers: (developerIdentifiers: string[]) => void;
    setTags: (tags: string[]) => void;
}

const useProjectStore = create<ProjectQueryStore>((set) => ({
    projectId: "",
    taskId: "",
    projectQuery: {},
    setSearchText: (searchText) =>
        set(() => ({ projectQuery: { searchText } })),
    setDeveloperIdentifiers: (developerIdentifiers) =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                developerIdentifiers,
                searchText: undefined,
            },
        })),
    setTags: (tags) =>
        set((store) => ({
            projectQuery: {
                ...store.projectQuery,
                tags,
                searchText: undefined,
            },
        })),
}));

export default useProjectStore;
