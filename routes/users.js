import { Router } from "express";
const router = Router();
import {
  getAllUser,
  getUserById,
  putUserById,
  createUser,
  deleteUserById,
} from "../controllers/userController";

// api/user
router.get("/", getAllUser);

//api/user/userId
router.get("/:productId", getUserById);

// change a user
router.put("/productId", putUserById);

// create an user
router.post("/create", createUser);

// delete an user
router.delete("/:productsId", deleteUserById);

export default router;
