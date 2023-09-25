import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Project } from "../domain/project";

const apiClient = new APIClient<Project>("/project/user/all");
const useProjectLength = () => {
    return useQuery({
        queryKey: ["projectsLength"],
        queryFn: () => apiClient.getAll(),
    });
};

export default useProjectLength;
