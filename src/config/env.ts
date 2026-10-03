import "dotenv/config";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

if (!PORT) {
  throw new Error("PORT is not defined in environment variables");
}
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

export const env = {
  PORT: Number(PORT),
  MONGO_URI,
};
