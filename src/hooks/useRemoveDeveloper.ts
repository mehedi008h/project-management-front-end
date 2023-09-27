import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/apiClient";
import { User } from "../domain/user";
import { toast } from "react-hot-toast";

const useRemoveDeveloper = (projectIdentifier: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<User>(
        `/project/remove-developer/${projectIdentifier}`
    );
    return useMutation<FetchResponse<User>, FetchResponse<Error>, User>({
        mutationFn: (user) => apiClient.put(user),
        onSuccess: (response) => {
            response.data;
            queryClient.invalidateQueries(["project", projectIdentifier]);
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

export default useRemoveDeveloper;
