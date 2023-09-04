import { useMutation } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/apiClient";
import { User } from "../domain/user";
import { toast } from "react-hot-toast";

const useAssignDeveloper = (projectIdentifier: string) => {
    const apiClient = new APIClient<User>(
        `/project/assign-developer/${projectIdentifier}`
    );
    return useMutation<FetchResponse<User>, FetchResponse<Error>, User>({
        mutationFn: (user) => apiClient.put(user),
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

export default useAssignDeveloper;