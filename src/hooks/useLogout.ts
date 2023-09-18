import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export interface FetchResponse {
    statusCode: number;
    httpStatus: string;
    message: string | null;
}

const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<FetchResponse>("/auth/logout");
    return useMutation<FetchResponse, ErrorResponse>(() => apiClient.get(), {
        onSuccess: () => {
            queryClient.setQueryData(["user"], null);

            navigate("/");
        },
        onError: (error) => {
            toast.error(error.response.data.message);
        },
    });
};

export default useLogout;
