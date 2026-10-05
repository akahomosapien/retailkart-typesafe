import CustomError from "#shared/utils/CustomError.js";
import generateToken from "#shared/utils/generateToken.js";
import User from "./user.model.js";
import bcrypt from "bcrypt";
export const createUser = async (userData) => {
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
export const loginUser = async (userData) => {
    const user = await User.findOne({ email: userData.email }).select("+password");
    if (!user) {
        throw new CustomError("Invalid email or password", 401);
    }
    const isPasswordCorrect = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordCorrect) {
        throw new CustomError("Invalid email or password", 401);
    }
    const userObject = user.toObject();
    const { password: _password, ...userResponse } = userObject;
    const token = generateToken({
        id: user._id.toString(),
    });
    return { user: userResponse, token };
};
export const getCurrentUser = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new CustomError("User not found", 404);
    }
    const userObject = user.toObject();
    const { password: _password, ...userResponse } = userObject;
    return userResponse;
};
//# sourceMappingURL=user.service.js.map