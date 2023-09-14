import { useMutation } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { User } from "../domain/user";
import { useNavigate } from "react-router-dom";

const useResetPassword = (token: string) => {
    const navigate = useNavigate();
    const apiClient = new APIClient<User>(`/auth/password/reset/${token}`);
    return useMutation<FetchResponse<User>, ErrorResponse, User>({
        mutationFn: (data) => apiClient.post(data),
        onSuccess: (response) => {
            response.data;
            navigate("/");
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

export default useResetPassword;
