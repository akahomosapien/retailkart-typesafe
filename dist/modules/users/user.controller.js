import asyncHandler from "../../shared/utils/asyncHandler.js";
import successResponse from "../../shared/utils/successResponse.js";
import { createUser } from "./user.service.js";
export const createUserController = asyncHandler(async (req, res) => {
    const user = await createUser(req.body);
    successResponse(res, "User created successfully", user, 201);
});
//# sourceMappingURL=user.controller.js.map