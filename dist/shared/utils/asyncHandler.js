// import type { NextFunction, Request, RequestHandler, Response } from "express";
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
export default asyncHandler;
//# sourceMappingURL=asyncHandler.js.map