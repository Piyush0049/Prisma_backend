import { Router } from "express";
import { createUser, updateUser } from "../controllers/Usercontroller.js";

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.put("/update/:id", updateUser);

export default userRouter;
