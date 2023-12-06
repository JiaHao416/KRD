import axios from "axios";

let headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization:
    "Bearer pat0ruS9AklJZMZMA.a33d42da398c69bb9cca2b4ac46ff6072ec0cf6ae43bc734dcdab37f7f09f635",
};

let instance = axios.create({
  baseURL: "https://api.airtable.com",
  headers: headers,
  timeout: 10000,
});

const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status });
};

instance.interceptors.response.use(
  (response) => response,
  ({ response: { data, status } }) => {
    // Error handling for API called
    return handleError({ data, status });
  }
);

export { instance };
