import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { ErrorResponse, FetchResponse } from "../service/apiClient";
import { toast } from "react-hot-toast";
import { User } from "../domain/user";

const useRemoveRequest = () => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<User>("/user/remove-team-mate");
    return useMutation<FetchResponse<User>, ErrorResponse, User>({
        mutationFn: (data) => apiClient.put(data),
        onSuccess: (response) => {
            response.data;
            queryClient.invalidateQueries(["invitations"]);
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

export default useRemoveRequest;
