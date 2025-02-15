import HTTPTransport from "../core/HTTPTransport.ts";
import {
  ChangeUserPasswordRequestType,
  ChangeUserProfileRequestType,
} from "./type.ts";

const usersApi = new HTTPTransport("/user");

const headers = {
  "Content-Type": "application/json",
};

export const changeUserProfile = async (data: ChangeUserProfileRequestType) => {
  return usersApi.put("/profile", { data, headers });
};

// export const changeUserAvatar = async (data: ChangeUserProfileRequestType) => {
//   return usersApi.put("/profile/avatar", { data, headers });
// };

export const changeUserPassword = async (
  data: ChangeUserPasswordRequestType,
) => {
  return usersApi.put("/profile/password", { data, headers });
};
