import { Router } from "express";
import { createUserController, loginUserController } from "./user.controller.js";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
