import { Request, Response, Router } from "express";

import { AuthRequest, userMiddleware } from "../middlewares";
import { purchaseModel } from "../models/schema";
import { handleError } from "../utils/errorHandler";


const courseRouter = Router() ;

courseRouter.post('/purchase',userMiddleware,async(req:AuthRequest,res:Response)=>{
    const userId = req.userId ;
    const courseId = req.body.courseId ;

    //should check the user has paid the price or not

    if (!courseId) {
         res.status(400).json({ message: "Course ID is required" });
         return ;
    }

    try {
        const purchased = await purchaseModel.create({ userId, courseId });

        res.status(201).json({ message: "Course purchased successfully", purchaseId: purchased._id });
    } catch (error) {
        handleError(res, error);
    }
})

courseRouter.get('/preview',userMiddleware,async(req:AuthRequest,res:Response)=>{
   try {
    const userId = req.userId ;
    const purchases = await purchaseModel.find({
        userId
    });

    res.status(200).json({
        message:"Your purchases",
        purchases
    })
   } catch (error) {
    handleError(res,error);
   }
})


export default courseRouter ;