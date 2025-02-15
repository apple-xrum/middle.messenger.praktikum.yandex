export type SignUpRequestType = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignInRequestType = {
  login: string;
  password: string;
};

export type CreateChatRequestType = {
  title: string;
};

export type DeleteChatRequestType = {
  chatId: number;
};

export type AddUsersToChatRequestType = {
  users: number[];
  chatId: number;
};

export type DeleteUsersFromChatRequestType = {
  users: number[];
  chatId: number;
};

export type ChangeUserProfileRequestType = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type ChangeUserPasswordRequestType = {
  oldPassword: string;
  newPassword: string;
};
