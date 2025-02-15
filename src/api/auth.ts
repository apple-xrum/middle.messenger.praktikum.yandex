import HTTPTransport from "../core/HTTPTransport";
import { SignInRequestType, SignUpRequestType } from "./type.ts";

const authApi = new HTTPTransport("/auth");

const headers = {
  "Content-Type": "application/json",
};

export const signup = async (data: SignUpRequestType) => {
  return authApi.post("/signup", {
    data,
    headers,
  });
};

export const signin = async (data: SignInRequestType) => {
  return authApi.post("/signin", {
    data,
    headers,
  });
};

export const me = async () => {
  return authApi.get("/user", {
    headers,
  });
};

export const logout = async () => {
  return authApi.post("/logout", {
    headers,
  });
};
