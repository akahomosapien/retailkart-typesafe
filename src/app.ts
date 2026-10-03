import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "RetailKart TypeScript backend is running",
  });
});

export default app;
