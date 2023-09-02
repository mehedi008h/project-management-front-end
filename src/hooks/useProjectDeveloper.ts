import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";

const useProjectDeveloper = (projectIdentifier: string) => {
    const apiClient = new APIClient<User>("/project/project-developer");
    return useQuery({
        queryKey: ["projectDeveloper", projectIdentifier],
        queryFn: () => apiClient.getAllById(projectIdentifier),
    });
};

export default useProjectDeveloper;
