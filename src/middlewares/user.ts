import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_USER_SECRET } from "../constants";

export interface AuthRequest extends Request {
  userId?: any;
}

const userMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
        res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });

        return ;
    }

    const decoded = jwt.verify(token, JWT_USER_SECRET) as { id: string };
    req.userId = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return ;
  }
};

export default userMiddleware ;
