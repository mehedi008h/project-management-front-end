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

    getAllById = async (id: number | string) => {
        return axiosInstance
            .get<FetchResponses<T>>(this.endpoint + "/" + id)
            .then((res) => res.data.data);
    };

    get = async () => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint)
            .then((res) => res.data.data);
    };

    getById = async (id: number | string) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint + "/" + id)
            .then((res) => res.data.data);
    };
    put = async (id: number | string, values: T) => {
        return axiosInstance
            .put<FetchResponse<T>>(this.endpoint + "/" + id, values)
            .then((res) => res.data.data);
    };
}

export default APIClient;
