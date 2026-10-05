import asyncHandler from "../../shared/utils/asyncHandler.js";
import successResponse from "../../shared/utils/successResponse.js";
import { createUser, loginUser } from "./user.service.js";
export const createUserController = asyncHandler(async (req, res) => {
    const user = await createUser(req.body);
    successResponse(res, "User created successfully", user, 201);
});
export const loginUserController = asyncHandler(async (req, res) => {
    const result = await loginUser(req.body);
    res.cookie("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    successResponse(res, "Login successful", result.user);
});
//# sourceMappingURL=user.controller.js.map