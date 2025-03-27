import adminRouter from "./admin";
import courseRouter from "./course";
import userRouter from "./user";


import { Router } from "express";

const router = Router() ;
router.use('/user', userRouter);
router.use('/course', courseRouter);
router.use('/admin',adminRouter)

export default router ;