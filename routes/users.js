import { Router } from "express";
import { UserController } from "../controllers/userController.js";

export const userRouter = Router();

// Get all users route
userRouter.get("/", UserController.getAllUser);

// Get a user by ID
userRouter.get("/:userId", UserController.getUserById);

// Update a user by ID
userRouter.put("/:userId", UserController.putUserById);

// Create a new user
userRouter.post("/register", UserController.postUser);

// Delete a user by ID
userRouter.delete("/:userId", UserController.deleteUserById);
