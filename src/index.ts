import express,{Request,Response} from 'express';
import router from './routes';
import { PORT } from './constants';
import connectDb from './config/db';

const app = express();

app.use('/api/v1',router);

app.get("/",(req:Request,res:Response)=>{
    res.json("hey");
})


app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`) ;
})

connectDb();