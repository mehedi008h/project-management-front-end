import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Project } from "../domain/project";

const apiClient = new APIClient<Project>("/project");
const useProjects = () =>
    useQuery({
        queryKey: ["projects"],
        queryFn: () => apiClient.getAll(),
    });

export default useProjects;
