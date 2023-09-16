import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/apiClient";

const apiClient = new APIClient<string>("/project/all/tags");
const useGetTags = () =>
    useQuery<string[], Error>({
        queryKey: ["tags"],
        queryFn: () => apiClient.getAll(),
    });

export default useGetTags;
