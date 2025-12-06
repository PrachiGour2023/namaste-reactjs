import axios from "axios";

const BASE_URL = "https://www.swiggy.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});
