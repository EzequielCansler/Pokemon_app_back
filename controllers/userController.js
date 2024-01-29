import { UserModel } from "../models/mysql/users";

export function getAllUser((req, res, next)) {
  const users = await UserModel.getAllUsers()
  res.json(users)
}
export function getUserById(req, res, next) {
  console.log(req.params.id); // parameters URL
  res.send("respond with a product with id");
}
export function putUserById(req, res, next) {
  console.log(req.body); // body request 201

  // insert in DB
  res.status(201).json(req.body);
}
export function postUser(req, res, next) {
  const {
    name,
    email,
    password,
    age
  }  = req.body
    const newUser ={
      "name": name,
      "email": email,
      "password" : password,
      "age" : age
    }
  res.status(201).json(newUser)
}
export function deleteUserById(req, res, next) {
  console.log(req.params.id);
}
