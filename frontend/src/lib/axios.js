import axios from "axios";

const BASE_URL = "https://talksync-21.onrender.com/api"; // Always use deployed backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});