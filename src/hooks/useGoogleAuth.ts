import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    ErrorResponse,
    FetchResponse,
    axiosInstance,
} from "../service/apiClient";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useGoogleAuth = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<FetchResponse<string>, ErrorResponse, string>({
        mutationFn: (code) =>
            axiosInstance.post("/auth/google", {
                // http://localhost:3001/auth/google backend that will exchange the code
                code,
            }),
        onSuccess: (response) => {
            response.data;
            queryClient.invalidateQueries(["user"]);
            navigate("/");
        },
        onError: (error) => {
            toast.error(error.response.data.message);
        },
    });
};

export default useGoogleAuth;
