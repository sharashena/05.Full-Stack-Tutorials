import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com/",
});

authFetch.interceptors.request.use(
  request => {
    request.headers.common["Accept"] = "application/json";
    return request;
  },
  err => Promise.reject(err)
);

authFetch.interceptors.response.use(
  response => {
    return response;
  },
  err => Promise.reject(err)
);

export default authFetch;
