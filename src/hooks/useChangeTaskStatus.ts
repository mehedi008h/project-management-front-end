import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { Task } from "../domain/task";
import useProjectStore from "../store/useProjectStore";

const useChangeTaskStatus = (taskIdentifier?: string) => {
    const project = useProjectStore();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Task>(
        `/task/change-status/${taskIdentifier}`
    );
    return useMutation<FetchResponse<Task>, ErrorResponse, Task>({
        mutationFn: (data) => apiClient.put(data),
        onSuccess: (response) => {
            response.data;
            queryClient.invalidateQueries(["projectTasks", project.projectId]);
            queryClient.invalidateQueries(["tasks"]);
            if (response.statusCode == 200) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        },
        onError: (error) => {
            toast.error(error.response.data.message);
        },
    });
};

export default useChangeTaskStatus;
