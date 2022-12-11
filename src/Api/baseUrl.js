import axios from "axios";

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});


export default baseUrl;
