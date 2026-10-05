// import "dotenv/config";
import app from "./app.js";
import { env } from "#config/env.js";
import connectDB from "#database/connectDB.js";
// const PORT = process.env.PORT;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(env.PORT, () => {
            console.log(`Server running on port:${env.PORT}`);
        });
    }
    catch (error) {
        console.log("Error starting server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map