import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: 123456,
  database: "pokemondb",
};

const connection = mysql.createConnection(config);
export class UserModel {
  static async getAllUsers() {
    const result = (await connection).query(
      "SELECT user_handle, email_address,password ,confirm_password,birthdate"
    );
    console.log(result);
  }
}
