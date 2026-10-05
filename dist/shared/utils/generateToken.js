import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
const generateToken = (payload) => {
    return jwt.sign(payload, env.JWT_SECRET);
};
export default generateToken;
//# sourceMappingURL=generateToken.js.map