import asyncHandler from "#shared/utils/asyncHandler.js";
import successResponse from "#shared/utils/successResponse.js";
import { createProduct, getProducts } from "./product.service.js";

export const createProductController = asyncHandler(async (req, res) => {
  const product = await createProduct(req.body);

  successResponse(res, "Product created successfully", product, 201);
});

export const getProductsController = asyncHandler(async (_req, res) => {
  const products = await getProducts();

  successResponse(res, "Products fetched successfully", products);
});
