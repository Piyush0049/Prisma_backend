import { Router } from "express";
import { createUser } from "../controllers/Usercontroller.js";

const userRouter = Router();

userRouter.post("/create", createUser);

export default userRouter;
