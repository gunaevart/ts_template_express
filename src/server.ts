import express, { Request, Response } from "express";
import UserResponse from "./interface/IUserResponse";
import dotenv from "dotenv";

const app = express()
app.use(express.json());
dotenv.config()
const PORT = process.env.PORT;


const userData: UserResponse[] = []


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.get("/api/users", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: userData.length,
    data: userData
  })
})


app.get("/api/user/:id", (req: Request, res: Response<UserResponse>) => {
  
  const user: UserResponse = {
    id: 1,
    name: "John Doe ",
    email: "john@example.ru",
    password: "123456"
    
  }

  res.json(user)

});


app.post("/api/users", (req: Request, res: Response) => {
  const id_rand = Math.floor(Math.random() * 10);
  const { name, email, password } = req.body;
  const users: UserResponse = {
    id: id_rand,
    name: name,
    email: email,
    password: password
  }
  
  userData.push(users)
  res.status(201).json(userData)
  console.log(userData)
});




app.listen(80, () => {
  console.log(`server is running on port ${PORT} `);
});