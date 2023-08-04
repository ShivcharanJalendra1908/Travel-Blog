import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app = express();
app.use(cors());

app.set("view engine","ejs");

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.use("/api", (req,res,next) => {
  res.send("Hello");
})

mongoose
  .connect(
    "mongodb+srv://Shivcharan:Jalendra@cluster0.bjztio7.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => app.listen(5000))
.then(() => 
    console.log("Connected To Database and Listening To Localhost")
)
.catch((err) => console.log(err));
