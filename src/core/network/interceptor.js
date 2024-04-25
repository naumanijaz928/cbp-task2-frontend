import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const authData = JSON.parse(user);
      if (authData && authData?.access_token) {
        config.headers.Authorization = `Bearer abcd`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response handler when we will receive response from API 
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      return error.response;
    }

    return Promise.reject(error);
  }
);

export default instance;
