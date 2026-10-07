import validateMiddleware from "#middlewares/validateMiddleware.js";
import { Router } from "express";
import { createProductSchema } from "./product.schema.js";
import {
  createProductController,
  getProductsController,
} from "./product.controller.js";

const productRouter = Router();

productRouter.post(
  "/",
  validateMiddleware(createProductSchema),
  createProductController,
);

productRouter.get("/", getProductsController);

export default productRouter;
