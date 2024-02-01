import { UserModel } from "../models/mysql/users.js";

export class UserController {
  static async getAllUser(req, res, next) {
    const users = await UserModel.getAllUsers();
    if (users.length > 0) {
      return res.json(users);
    } else {
      return next({ status: 404, message: "Usuario no encontrado" });
    }
  }
  static async getUserById(req, res, next) {
    const { userId } = req.params;
    const user = await UserModel.getUserById({ id: userId });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  }
  static async postUser(req, res, next) {
    const { user_handle, email_address, password, birthdate } = req.body;
    try {
      const newUser = await UserModel.createUser({
        user_handle,
        email_address,
        password,
        birthdate,
      });
      res.status(201).json({ newUser });
    } catch (error) {
      console.log("Error en el controlador", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  }
  static async putUserById(req, res, next) {
    console.log(req.body); // body request 201

    // insert in DB
    res.status(201).json(req.body);
  }
  static async deleteUserById(req, res, next) {
    const { userId } = req.params;

    try {
      let deletedUser = await UserModel.deleteUserById(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: "El usuario no existe" });
      } else {
        return res
          .status(200)
          .json({ message: "Se ha eliminado correctamente el usuario" });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Error al procesar la solicitud" });
    }
  }
}
