import { JWT_ADMIN_SECRET } from "../constants";
import jwt from "jsonwebtoken" ;
import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "./user";

const adminMiddleware = (req:AuthRequest, res:Response, next:NextFunction)=>{
    try {
        const token = req.cookies?.token;
        if (!token) {
          res
            .status(401)
            .json({ message: "Unauthorized: No token provided" });

            return ;
        }
    
        const decoded = jwt.verify(token, JWT_ADMIN_SECRET) as { id: string };
        req.user = decoded;

        next();
      } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
        return
      }
}

export default adminMiddleware;