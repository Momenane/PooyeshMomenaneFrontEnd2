import http from './httpService';
import config from "../config.json";

const apiEndpoint = config.apiURl + "/user";

export async function register(bodyData) {
  const { data } = await http.post(
    apiEndpoint,
     bodyData ,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return data
}