import { create } from "zustand";

interface ProjectQuery {
    projectId: string;
}

const useProjectStore = create<ProjectQuery>(() => ({
    projectId: "",
}));

export default useProjectStore;
