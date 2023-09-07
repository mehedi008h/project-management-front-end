import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import useProjectStore from "../store/useProjectStore";

export interface FetchResponse {
    statusCode: number;
    httpStatus: string;
    message: string | null;
}

const useTaskDelete = (taskIdentifier: string) => {
    // get project identifier from zustand store
    const project = useProjectStore();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<FetchResponse>(
        `/task/delete/${taskIdentifier}`
    );
    return useMutation<FetchResponse, ErrorResponse>(() => apiClient.delete(), {
        onSuccess: (response) => {
            queryClient.invalidateQueries(["projectTasks", project.projectId]);
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

export default useTaskDelete;
