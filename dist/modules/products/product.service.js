import CustomError from "#shared/utils/CustomError.js";
import Product from "./product.model.js";
export const createProduct = async (productData) => {
    const product = await Product.create(productData);
    return product.toObject();
};
/*IProduct[]-> because we are returning an array of products
Promise<IProduct[]>
   ↓
an asynchronous operation that eventually
returns many products
*/
export const getProducts = async () => {
    const products = await Product.find();
    return products.map((product) => product.toObject());
};
export const getProductById = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new CustomError("Product not found", 404);
    }
    return product.toObject();
};
//# sourceMappingURL=product.service.js.map