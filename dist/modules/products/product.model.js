import { model, Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    images: {
        type: [String],
        default: [],
    },
}, { timestamps: true });
const Product = model("Product", productSchema);
export default Product;
//# sourceMappingURL=product.model.js.map