import { useMutation } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/apiClient";
import { User } from "../domain/user";
import { toast } from "react-hot-toast";

const useRegister = () => {
    const apiClient = new APIClient<User>("/auth/register");
    return useMutation<FetchResponse<User>, FetchResponse<Error>, User>({
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

export default useRegister;
