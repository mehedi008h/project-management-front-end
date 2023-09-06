import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";

export interface FetchResponse {
    statusCode: number;
    httpStatus: string;
    message: string | null;
}

const useLogout = () => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<FetchResponse>("/auth/logout");
    return useMutation<FetchResponse, ErrorResponse>(() => apiClient.get(), {
        onSuccess: (response) => {
            queryClient.setQueryData(["user"], null);
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

export default useLogout;
