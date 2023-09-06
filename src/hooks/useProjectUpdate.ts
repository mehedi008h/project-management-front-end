import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { Project } from "../domain/project";

const useProjectUpdate = (projectIdentifier: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Project>("/project/update");
    return useMutation<FetchResponse<Project>, ErrorResponse, Project>({
        mutationFn: (data) => apiClient.put(data),
        onSuccess: (response) => {
            response.data;
            queryClient.invalidateQueries(["project", projectIdentifier]);
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

export default useProjectUpdate;
