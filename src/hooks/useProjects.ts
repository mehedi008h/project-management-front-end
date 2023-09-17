import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Project } from "../domain/project";

const apiClient = new APIClient<Project>("/project");
const useProjects = () => {
    return useInfiniteQuery({
        queryKey: ["projects"],
        queryFn: ({ pageParam }) =>
            apiClient.getAllByQuery({
                params: {
                    page: pageParam,
                },
            }),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default useProjects;
