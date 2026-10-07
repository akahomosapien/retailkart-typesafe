//schema:ZodType simply means the middleware will recieve a ZodSchema
//schema.safeParse(): "Take whatever the client sent in the request body and check it against this schema.
const validateMiddleware = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            /*
            Aiming for this structure in the response:
              {
                  "success": false,
                  "message": "Validation failed",
                  "errors": {
                  "email": "Invalid email address",
                  "password": "Password must be at least 6 characters"
                  }
              }
      
              Zod gives us:
              issue.path = ["email"]
              issue.message = "Invalid email address"
              
              We turn it to:
              errors.email = "Invalid email address";
      
              Record<string, string>: Any object whose keys and values are string
              */
            const errors = {};
            for (const issue of result.error.issues) {
                const field = issue.path[0];
                if (typeof field === "string") {
                    errors[field] = issue.message;
                }
            }
            res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors,
            });
            return;
        }
        req.body = result.data;
        next();
    };
};
export default validateMiddleware;
//# sourceMappingURL=validateMiddleware.js.map