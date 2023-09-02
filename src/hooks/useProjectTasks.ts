import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Task } from "../domain/task";

const useProjectTasks = (projectIdentifier: string) => {
    const apiClient = new APIClient<Task>("/task");
    return useQuery({
        queryKey: ["projectTasks", projectIdentifier],
        queryFn: () => apiClient.getAllById(projectIdentifier),
    });
};

export default useProjectTasks;
