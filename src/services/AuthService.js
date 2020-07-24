import http from './httpService';
import config from "../config.json";

const apiEndpoint = config.apiURl ;
const tokenKey = "token";


http.setJwt(getJwt());
export async function register(bodyData) {
  const  {data}  = await http.post(
    apiEndpoint+ "user",
     bodyData ,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  let jwt = data.token;

  localStorage.setItem(tokenKey, jwt);
}

export async function login(bodyData) {
  const  {data}  = await http.post(
    apiEndpoint+ "login",
     bodyData ,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  let jwt = data.token;
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}


export default {
  register,
  login,
  logout,
  getJwt,
  loginWithJwt
};
