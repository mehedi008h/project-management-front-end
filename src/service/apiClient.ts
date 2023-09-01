import axios from "axios";

export interface FetchResponses<T> {
    statusCode: number;
    httpStatus: string;
    message: string | null;
    data: T[];
}
export interface FetchResponse<T> {
    statusCode: number;
    httpStatus: string;
    message: string | null;
    data: T;
}

export const axiosInstance = axios.create({
    baseURL: " http://localhost:8000/api/v1",
    withCredentials: true,
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async () => {
        return axiosInstance
            .get<FetchResponses<T>>(this.endpoint)
            .then((res) => res.data.data);
    };

    get = async () => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint)
            .then((res) => res.data.data);
    };
}

export default APIClient;
