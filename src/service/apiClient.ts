import axios from "axios";

export const authApi = axios.create({
    baseURL: " http://localhost:8000/api/v1",
    withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
