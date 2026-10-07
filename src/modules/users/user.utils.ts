import type { IUser, UserResponse } from "./user.types.js";

export const toUserResponse = (user: IUser): UserResponse => {
  const { password: _password, ...userResponse } = user;

  return userResponse;
};
