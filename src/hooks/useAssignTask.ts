import { useMutation } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { Task } from "../domain/task";

const useAssignTask = (projectIdentifier: string) => {
    const apiClient = new APIClient<Task>(`/task/${projectIdentifier}`);
    return useMutation<FetchResponse<Task>, ErrorResponse, Task>({
        mutationFn: (data) => apiClient.post(data),
        onSuccess: (response) => {
            response.data;
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

export default useAssignTask;
