import { Router } from "express";
import { createUserController } from "./user.controller.js";
const userRouter = Router();
userRouter.post("/", createUserController);
export default userRouter;
//# sourceMappingURL=user.route.js.map