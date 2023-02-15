import axios from "axios";

// Logic to connect to database
axios.defaults.baseURL = 'https://drf-api9010.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();