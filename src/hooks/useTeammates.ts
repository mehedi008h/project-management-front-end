import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/user/team-mates");
const useTeammates = () =>
    useQuery<User[], Error>({
        queryKey: ["teams"],
        queryFn: () => apiClient.getAll(),
    });

export default useTeammates;
