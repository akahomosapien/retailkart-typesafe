import "dotenv/config";
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
if (!PORT) {
    throw new Error("PORT is not defined in environment variables");
}
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}
export const env = {
    PORT: Number(PORT),
    MONGO_URI,
    JWT_SECRET,
};
//# sourceMappingURL=env.js.map