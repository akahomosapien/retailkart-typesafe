import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "./user.controller.js";
import authMiddleware from "#middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.post("/login", loginUserController);

//Test Route
userRouter.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You are authenticated",
    userId: req.user?.id,
  });
});

export default userRouter;
