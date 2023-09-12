import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { Task } from "../domain/task";

const useProjectTasks = (projectIdentifier: string) => {
    const apiClient = new APIClient<Task>(`/task/${projectIdentifier}`);
    return useInfiniteQuery({
        queryKey: ["projectTasks", projectIdentifier],
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

export default useProjectTasks;
