import Product from "./product.model.js";
export const createProduct = async (productData) => {
    const product = await Product.create(productData);
    return product.toObject();
};
//# sourceMappingURL=product.service.js.map