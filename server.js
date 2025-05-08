import express from "express";
import { Router } from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Server is running at port 3000 successfully!");
});
app.listen(3000, () => {
  console.log("Server is running at port 3000!");
});
