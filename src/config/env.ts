const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined in environment variables");
}

export const env = {
  PORT: Number(PORT),
};