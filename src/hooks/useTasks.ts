import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Task } from "../domain/task";

const apiClient = new APIClient<Task>("/task/user/all/task");
const useTasks = () =>
    useQuery<Task[], Error>({
        queryKey: ["tasks"],
        queryFn: () => apiClient.getAll(),
    });

export default useTasks;
