import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Project } from "../domain/project";

const apiClient = new APIClient<Project>("/project");
const useProject = (projectIdentifier: string) =>
    useQuery({
        queryKey: ["project", projectIdentifier],
        queryFn: () => apiClient.get(projectIdentifier),
    });

export default useProject;
