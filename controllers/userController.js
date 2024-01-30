import { UserModel } from "../models/mysql/users.js";

export class UserController {
  static async getAllUser(req, res, next) {
    const users = await UserModel.getAllUsers();
    if (users.length > 0) {
      return res.json(users);
    } else {
      return next({ status: 404, message: "No user found" });
    }
  }
  static async getUserById(req, res, next) {
    const { userId } = req.params;
    const user = await UserModel.getUserById({ id: userId });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  }
  static async postUser(req, res, next) {
    const { name, email, password, age } = req.body;
    const newUser = {
      name: name,
      email: email,
      password: password,
      age: age,
    };
    res.status(201).json(newUser);
  }
  static async putUserById(req, res, next) {
    console.log(req.body); // body request 201

    // insert in DB
    res.status(201).json(req.body);
  }
  static async deleteUserById(req, res, next) {
    console.log(req.params.id);
  }
}
