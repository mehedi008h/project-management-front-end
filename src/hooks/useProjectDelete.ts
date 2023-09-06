import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";

export interface FetchResponse {
    statusCode: number;
    httpStatus: string;
    message: string | null;
}

const useProjectDelete = (projectIdentifier: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<FetchResponse>(
        `/project/${projectIdentifier}`
    );
    return useMutation<FetchResponse, ErrorResponse>(() => apiClient.delete(), {
        onSuccess: (response) => {
            queryClient.invalidateQueries(["projects"]);
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

export default useProjectDelete;
