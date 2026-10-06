//schema:ZodType simply means the middleware will recieve a ZodSchema
//schema.safeParse(): "Take whatever the client sent in the request body and check it against this schema.
const validateMiddleware = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: result.error.issues,
            });
            return;
        }
        req.body = result.data;
        next();
    };
};
export default validateMiddleware;
//# sourceMappingURL=validateMiddleware.js.map