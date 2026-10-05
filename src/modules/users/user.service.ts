import CustomError from "../../shared/utils/CustomError.js";
import User from "./user.model.js";
import type { CreateUserData, UserResponse } from "./user.types.js";
import bcrypt from "bcrypt";

export const createUser = async (
  userData: CreateUserData,
): Promise<UserResponse> => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new CustomError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await User.create({ ...userData, password: hashedPassword });

  const userObject = user.toObject();

  //destructure the userObject and collect the properties inside the userResponse -password
  const { password: _password, ...userResponse } = userObject;

  //Failed as TS not allowing to delete a property as the type is already fixed
  //   delete userObject.password;

  return userResponse;
};
