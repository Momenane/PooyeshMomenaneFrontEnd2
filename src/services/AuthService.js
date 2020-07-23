import http from './httpService';
import config from "../config.json";

const apiEndpoint = config.apiURl ;
const tokenKey = "token";

export async function register(bodyData) {
  const  data  = await http.post(
    apiEndpoint+ "user",
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

export async function login(bodyData) {
  const  data  = await http.post(
    apiEndpoint+ "login",
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


export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}


export default {
  register,
  logout,
  getToken
};
