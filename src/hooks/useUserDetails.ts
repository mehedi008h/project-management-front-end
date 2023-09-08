import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/user");
const useUserDetails = (id: string) =>
    useQuery({
        queryKey: ["userDetails", id],
        queryFn: () => apiClient.getById(id),
    });

export default useUserDetails;
