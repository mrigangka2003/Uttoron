import { Request, Response, Router } from "express";


const courseRouter = Router() ;

courseRouter.post('/purchase',(req:Request,res:Response)=>{
    res.json({
        message:"your purchase has successfully done"
    })
})

courseRouter.get('/preview',(req:Request,res:Response)=>{
    res.json({
        message:"you have this much courses"
    })
})


export default courseRouter ;