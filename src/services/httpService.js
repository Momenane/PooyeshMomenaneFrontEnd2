import axios from "axios";
// import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = jwt;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  setJwt
};
