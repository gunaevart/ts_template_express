import express, { Request, Response } from "express";
const app = express()

import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT;




app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello world",
  });
});



app.listen(80, () => {
  console.log(`server is running on port ${PORT} `);
});