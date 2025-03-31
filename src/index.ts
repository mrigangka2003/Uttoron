import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

import router from "./routes";
import { PORT } from "./constants";
import connectDb from "./config/db";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.json("hey");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

connectDb();
