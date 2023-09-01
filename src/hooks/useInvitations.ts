import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/user/invitation");
const useInvitations = () =>
    useQuery<User[], Error>({
        queryKey: ["invitations"],
        queryFn: () => apiClient.getAll(),
    });

export default useInvitations;
