import { Request, Response, Router } from "express";

const userRouter = Router();


userRouter.post('/signup',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})


userRouter.post('/signin',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})

userRouter.get('/purchases',async(req:Request,res:Response)=>{
    res.send("Purchase something")
})

export  default userRouter ;