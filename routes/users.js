import { Router } from "express";
import {
  getAllUser,
  getUserById,
  putUserById,
  postUser,
  deleteUserById,
} from "../controllers/userController.js";

export const userRouter = Router();

// Get all users route
userRouter.get("/", getAllUser);

// Get a user by ID
userRouter.get("/:userId", getUserById);

// Update a user by ID
userRouter.put("/:userId", putUserById);

// Create a new user
userRouter.post("/register", postUser);

// Delete a user by ID
userRouter.delete("/:userId", deleteUserById);
