import app from "./app.js";
import { env } from "./config/env.js";

// const PORT = process.env.PORT;

app.listen(env.PORT, () => {
  console.log(`Server running on port:${env.PORT}`);
});
