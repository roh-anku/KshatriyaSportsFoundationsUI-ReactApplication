import axios from "axios";

const apiHost = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");

const api = axios.create({
  baseURL: `${apiHost}/api`
});

export default api;