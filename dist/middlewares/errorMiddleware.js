import CustomError from "#shared/utils/CustomError.js";
//Express provides exclusive type for ErrorMiddleware
const errorMiddleware = (error, _req, res, _next) => {
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
//# sourceMappingURL=errorMiddleware.js.map