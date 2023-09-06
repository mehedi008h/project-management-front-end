import { useMutation } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { Project } from "../domain/project";

const useCreateProject = () => {
    const apiClient = new APIClient<Project>("/project");
    return useMutation<FetchResponse<Project>, FetchResponse<Error>, Project>({
        mutationFn: (data) => apiClient.post(data),
        onSuccess: (response) => {
            response.data;
            if (response.statusCode === 200) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        },
        onError: (error) => {
            error.message;
        },
    });
};

export default useCreateProject;
