import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Task } from "../domain/task";

const apiClient = new APIClient<Task>("/task/details");
const useTask = (taskIdentifier: string) =>
    useQuery({
        queryKey: ["task", taskIdentifier],
        queryFn: () => apiClient.getById(taskIdentifier),
    });

export default useTask;
