import Product from "./product.model.js";
import type { CreateProductData } from "./product.schema.js";
import type { IProduct } from "./product.types.js";

export const createProduct = async (
  productData: CreateProductData,
): Promise<IProduct> => {
  const product = await Product.create(productData);

  return product.toObject();
};
