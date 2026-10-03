import express from "express";
const app = express();
//Global Middlewares
app.use(express.json());
//Routes
app.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "RetailKart TypeScript backend is running",
    });
});
//Error Middleware
export default app;
//# sourceMappingURL=app.js.map