import validateMiddleware from "#middlewares/validateMiddleware.js";
import { Router } from "express";
import { createProductSchema } from "./product.schema.js";
import { createProductController } from "./product.controller.js";
const productRouter = Router();
productRouter.post("/", validateMiddleware(createProductSchema), createProductController);
export default productRouter;
//# sourceMappingURL=product.route.js.map