import type { ErrorRequestHandler } from "express";
import CustomError from "../shared/utils/CustomError.js";

//Express provides exclusive type for ErrorMiddleware

const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
): void => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });

    return;
  }

  console.error("Unexpected Error:", error);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorMiddleware;
