import { create } from "zustand";

interface ProjectQuery {
    projectId: string;
    taskId: string;
}

const useProjectStore = create<ProjectQuery>(() => ({
    projectId: "",
    taskId: "",
}));

export default useProjectStore;
