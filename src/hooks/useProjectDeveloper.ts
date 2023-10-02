import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const apiClient = new APIClient<User>("/project/project-developer");
const useProjectDeveloper = (projectIdentifier: string) =>
    useQuery({
        queryKey: ["projectDeveloper", projectIdentifier],
        queryFn: () => apiClient.getAllById(projectIdentifier),
    });

export default useProjectDeveloper;
