import { useMutation } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { User } from "../domain/user";
import { toast } from "react-hot-toast";

const useLogin = () => {
    const apiClient = new APIClient<User>("/auth/login");
    return useMutation<FetchResponse<User>, ErrorResponse, User>({
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

export default useLogin;
