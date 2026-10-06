import { env } from "#config/env.js";
import asyncHandler from "#shared/utils/asyncHandler.js";
import CustomError from "#shared/utils/CustomError.js";
import successResponse from "#shared/utils/successResponse.js";
import { createUser, getCurrentUser, loginUser } from "./user.service.js";
export const createUserController = asyncHandler(async (req, res) => {
    /*TS assertion is used which will not gurantee in itself but eventually req flows through the validate middleware which checks for the type*/
    const user = await createUser(req.body);
    successResponse(res, "User created successfully", user, 201);
});
export const loginUserController = asyncHandler(async (req, res) => {
    const result = await loginUser(req.body);
    res.cookie("token", result.token, {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    successResponse(res, "Login successful", result.user);
});
export const getCurrentUserController = asyncHandler(async (req, res) => {
    if (!req.user) {
        throw new CustomError("Authentication Required", 401);
    }
    const user = await getCurrentUser(req.user.id);
    successResponse(res, "User fetched successfully", user);
});
export const logoutUserController = asyncHandler(async (_req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
    });
    successResponse(res, "Logout Successful");
});
//# sourceMappingURL=user.controller.js.map