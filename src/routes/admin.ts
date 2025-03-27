import { Router,Request,Response } from "express";

const adminRouter = Router() ;

adminRouter.post('/signup',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})


adminRouter.post('/signin',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})



adminRouter.post('/create',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})
adminRouter.put('/create',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})
adminRouter.get('/create/bulk',async(req:Request,res:Response)=>{
    res.json({
        message:"Signup Route"
    })
})

export default adminRouter ;




