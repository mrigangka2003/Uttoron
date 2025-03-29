import { Router, Request, Response } from "express";
import { adminModel } from "../models/schema";
import { JWT_ADMIN_SECRET } from "../constants";
import { handleError } from "../utils/errorHandler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminRouter = Router();

adminRouter.post("/signup", async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existedAdmin = await adminModel.findOne({
      email,
    });

    if (existedAdmin) {
      res.status(409).json({ message: "user already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    if (!newUser) {
      res.status(402).json({ message: "something went wrong" });
      return;
    }

    res.status(201).json({ id: newUser.id });
  } catch (error) {
    handleError(res, error);
  }
});

adminRouter.post("/signin", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await adminModel.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User does not exist" });
        return;
      }

      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_ADMIN_SECRET
      );

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ message: "login Successful" });
    } catch (error) {
      handleError(res, error);
    }
});

adminRouter.post("/create", async (req: Request, res: Response) => {
  res.json({
    message: "Signup Route",
  });
});
adminRouter.put("/create", async (req: Request, res: Response) => {
  res.json({
    message: "Signup Route",
  });
});
adminRouter.get("/create/bulk", async (req: Request, res: Response) => {
  res.json({
    message: "Signup Route",
  });
});

export default adminRouter;
