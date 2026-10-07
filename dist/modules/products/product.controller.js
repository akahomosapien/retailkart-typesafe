import asyncHandler from "#shared/utils/asyncHandler.js";
import successResponse from "#shared/utils/successResponse.js";
import { createProduct } from "./product.service.js";
export const createProductController = asyncHandler(async (req, res) => {
    const product = await createProduct(req.body);
    successResponse(res, "Product created successfully", product, 201);
});
//# sourceMappingURL=product.controller.js.map