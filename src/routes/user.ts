import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/schema";
import { handleError } from "../utils/errorHandler";

const userRouter = Router();

userRouter.post("/signup", async (req: Request, res: Response):Promise<void> => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existedUser = await userModel.findOne({
      email,
    });

    if (existedUser) {
      res.status(409).json({ message: "user already exists" });
      return ;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    if (!newUser) {
      res.status(402).json({ message: "something went wrong" });
      return ;
    }

    res.status(201).json({ id: newUser.id });
  } catch (error) {
    handleError(res,error);
  }
});

userRouter.post("/signin", async (req: Request, res: Response) :Promise<void> => {
  const {email , password} = req.body ;
  try {
    const user = await userModel.findOne({email});
    if(!user){
     res.status(404).json({ message: "User does not exist" });
     return ;
    }
    // I have to implement json web token here 

    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch){
      res.status(401).json({ message: "Invalid credentials" });
      return ;
    }
  } catch (error) {
    handleError(res,error);
  }
});

userRouter.get("/purchases", async (req: Request, res: Response) => {
  res.send("Purchase something");
});

export default userRouter;