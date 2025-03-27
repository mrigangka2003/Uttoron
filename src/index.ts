import express,{Request,Response} from 'express';
import router from './routes';

const app = express();

app.use('/api/v1',router);

app.get("/",(req:Request,res:Response)=>{
    res.json("hey");
})


app.listen(8000,()=>{
    console.log("Server is running on the port 8000")
})