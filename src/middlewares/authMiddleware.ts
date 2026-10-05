import { env } from "#config/env.js";
import type { TokenPayload } from "#shared/utils/generateToken.js";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

/*Declaration Merging: 
"Express already has a Request interface. 
I'm extending it with one additional property called user."
*/
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Authentication Required",
    });

    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
