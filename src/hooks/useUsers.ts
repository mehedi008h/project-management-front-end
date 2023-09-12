import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";
import { User } from "../domain/user";
import useUserStore from "../store/useUserStore";

const apiClient = new APIClient<User>("/user");
const useUsers = () => {
    const userQuery = useUserStore((s) => s.userQuery);
    return useInfiniteQuery({
        queryKey: ["users", userQuery],
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

export default useUsers;
