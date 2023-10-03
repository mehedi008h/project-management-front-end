import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { DashboardTask } from "../domain/dashboard";
import useTaskStore from "../store/useTaskStore";

const apiClient = new APIClient<DashboardTask>(
    "/task/dashboard/all-task/status"
);
const useDashboardTask = () => {
    const taskQuery = useTaskStore((s) => s.projectIdentifier);
    return useQuery({
        queryKey: ["dashboardTasks", taskQuery],
        queryFn: () =>
            apiClient.getByQuery({
                params: {
                    search: taskQuery,
                },
            }),
    });
};

export default useDashboardTask;
