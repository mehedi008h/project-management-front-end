import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Project } from "../domain/project";
import useProjectStore from "../store/useProjectStore";

const apiClient = new APIClient<Project>("/project/progress");
const useProgressProjects = () => {
    const projectQuery = useProjectStore((s) => s.projectQuery);
    return useInfiniteQuery({
        queryKey: ["projects-progress", projectQuery],
        queryFn: ({ pageParam }) =>
            apiClient.getAllByQuery({
                params: {
                    search: projectQuery.searchText,
                    page: pageParam,
                    tags: projectQuery.tag,
                    developers: projectQuery.developerIdentifier,
                },
            }),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default useProgressProjects;
