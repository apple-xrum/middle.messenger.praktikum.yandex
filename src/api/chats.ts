import HTTPTransport from "../core/HTTPTransport";
import {
  AddUsersToChatRequestType,
  CreateChatRequestType,
  DeleteChatRequestType,
  DeleteUsersFromChatRequestType,
} from "./type.ts";

const chatsApi = new HTTPTransport("/chats");

const headers = {
  "Content-Type": "application/json",
};

export const getChats = async () => {
  return chatsApi.get("", { headers });
};

export const createChat = async (data: CreateChatRequestType) => {
  return chatsApi.post("", { data, headers });
};

export const deleteChat = async (data: DeleteChatRequestType) => {
  return chatsApi.delete("", { data, headers });
};

export const getUsersFromChat = async (chatId: number) => {
  return chatsApi.get(`/${chatId}/users`, { headers });
};

export const addUsersToChat = async (data: AddUsersToChatRequestType) => {
  return chatsApi.post("/users", { data, headers });
};

export const deleteUsersFromChat = async (
  data: DeleteUsersFromChatRequestType,
) => {
  return chatsApi.delete("/users", { data, headers });
};

export const getNewMessagesFromChat = async (chatId: number) => {
  return chatsApi.get(`/new/${chatId}`, { headers });
};
