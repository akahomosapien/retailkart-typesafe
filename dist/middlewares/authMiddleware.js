import { env } from "#config/env.js";
import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            success: false,
            message: "Authentication Required",
        });
        return;
    }
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map