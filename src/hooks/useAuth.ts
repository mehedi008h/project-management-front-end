import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/auth/me");
const useAuth = () =>
    useQuery({
        queryKey: ["user"],
        queryFn: () => apiClient.get(),
    });

export default useAuth;
