import courseRouter from "./course";
import userRouter from "./user";


import { Router } from "express";

const router = Router() ;
router.use('/user', userRouter);
router.use('/course', courseRouter);


export default router ;