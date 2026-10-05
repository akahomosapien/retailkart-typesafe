interface TokenPayload {
  id: string;
}

import jwt from "jsonwebtoken";
import { env } from "#config/env.js";

const generateToken = (payload: TokenPayload) => {
  return jwt.sign(payload, env.JWT_SECRET);
};

export default generateToken;
