import { Router } from "express";
import {
  createUserController,
  getCurrentUserController,
  loginUserController,
  logoutUserController,
  updateProfileController,
} from "./user.controller.js";
import authMiddleware from "#middlewares/authMiddleware.js";
import validateMiddleware from "#middlewares/validateMiddleware.js";
import {
  loginSchema,
  signupSchema,
  updateProfileSchema,
} from "./user.schema.js";

const userRouter = Router();

userRouter.post("/", validateMiddleware(signupSchema), createUserController);
userRouter.post("/login", validateMiddleware(loginSchema), loginUserController);
userRouter.get("/me", authMiddleware, getCurrentUserController);
userRouter.post("/logout", logoutUserController);
userRouter.patch(
  "/me",
  authMiddleware,
  validateMiddleware(updateProfileSchema),
  updateProfileController,
);

//Test Route
// userRouter.get("/protected", authMiddleware, (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "You are authenticated",
//     userId: req.user?.id,
//   });
// });

export default userRouter;
