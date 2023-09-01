import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/user");
const useUsers = () =>
    useQuery<User[], Error>({
        queryKey: ["users"],
        queryFn: () => apiClient.getAll(),
    });

export default useUsers;
