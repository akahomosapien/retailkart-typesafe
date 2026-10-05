export interface IUser {
  firstName: string;
  lastName: string;

  profilePic?: string;
  profilePicPublicId?: string;

  email: string;
  password: string;

  role: "user" | "admin";

  isVerified: boolean;
  isLoggedIn: boolean;

  otp?: string | null;
  otpExpiry?: Date | null;

  address?: string;
  city?: string;
  zipCode?: string;
  phoneNo?: string;

  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserData = Pick<
  IUser,
  "firstName" | "lastName" | "email" | "password"
>;

export type UserResponse = Omit<IUser, "password">;