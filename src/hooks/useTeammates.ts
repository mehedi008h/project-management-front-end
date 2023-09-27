import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";
import useAssignDeveloperStore from "../store/useAssignDeveloperStore";

const apiClient = new APIClient<User>("/user/teams/team-mate");
const useTeammates = () => {
    const userQuery = useAssignDeveloperStore((s) => s.userQuery);
    return useInfiniteQuery({
        queryKey: ["teams", userQuery],
        queryFn: ({ pageParam }) =>
            apiClient.getAllByQuery({
                params: {
                    search: userQuery.searchText,
                    page: pageParam,
                },
            }),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default useTeammates;
