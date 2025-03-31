import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { adminModel, courseModel } from "../models/schema";
import { JWT_ADMIN_SECRET } from "../constants";
import { handleError } from "../utils/errorHandler";
import { adminMiddleware, AuthRequest } from "../middlewares";

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

adminRouter.post(
  "/create",
  adminMiddleware,
  async (req: AuthRequest, res: Response) => {
    const adminId = req.userId;

    //will Implement the file upload by multer
    const { title, description, imageUrl, price } = req.body;
    try {
      const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
      });

      if (!course) {
        res.status(500).json({ message: "Failed to create course" });
        return;
      }

      res.status(200).json({
        message: "courese created",
        courseId: course._id,
      });
    } catch (error) {
      handleError(res, error);
    }
  }
);

adminRouter.put(
  "/course/:id",
  adminMiddleware,
  async (req: AuthRequest, res: Response) => {
    const courseId = req.params.id;

    if (!courseId) {
      res.status(400).json({ message: "Course ID is required" });
      return;
    }
    const adminId = req.userId;
    const { title, price, description, imageUrl } = req.body;

    try {
      const updatedCourse = await courseModel.findByIdAndUpdate(
        { _id: courseId, creatorId: adminId },
        { title, description, imageUrl, price },
        { new: true }
      );

      if (!updatedCourse) {
        res.status(404).json({ message: "Course not found" });
        return;
      }

      res
        .status(200)
        .json({ message: "Course updated", courseId: updatedCourse._id });
    } catch (error) {
      handleError(res, error);
    }
  }
);

adminRouter.get(
  "/course/bulk",
  adminMiddleware,
  async (req: AuthRequest, res: Response) => {
    try {
      const adminId = req.userId;
      const courses = await courseModel.find({
        creatorId: adminId,
      });

      if (!courses) {
        res.status(400).json({ message: "Something wen wrong" });
        return;
      }

      res.status(200).json({
        message: "Courses",
        courses,
      });
    } catch (error) {
      handleError(res, error);
    }
  }
);

export default adminRouter;