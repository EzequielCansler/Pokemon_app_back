export function getAllUser(req, res, next) {
  res.status(200).json("respond with a product");
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
export function createUser(req, res, next) {
  body = "";
  console.log(req.body); // body request 201

  // insert in DB
  res.status(201).json(req.body);
}
export function deleteUserById(req, res, next) {
  console.log(req.params.id);
}
