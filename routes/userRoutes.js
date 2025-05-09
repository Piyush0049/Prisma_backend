import { Router } from "express";
import { createUser, updateUser, deleteUser } from "../controllers/Usercontroller.js";

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
