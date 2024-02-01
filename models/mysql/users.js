import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456",
  database: "pokemon_db",
};

const connection = await mysql.createConnection(config);

export class UserModel {
  static async getAllUsers() {
    try {
      const [results] = await connection.query("SELECT * FROM users");
      return results;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById({ id }) {
    try {
      const [results] = await connection.execute(
        "SELECT * FROM users WHERE user_id = ?",
        [id]
      );
      if (results.length > 0) {
        return results[0];
      } else {
        return null; // user not founded
      }
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    const { user_handle, email_address, password, birthdate } = newUser;
    if (!user_handle || !email_address || !password || !birthdate) {
      throw new Error("Missing required fields");
    } else {
      const result = await connection.execute(
        "INSERT INTO users (user_handle, email_address, password, birthdate) VALUES (?,?,?,?)",
        [user_handle, email_address, password, birthdate]
      );
      return result[0].insertId;
    }
  }

  static async deleteUserById(id) {
    try {
      const [results] = await connection.execute(
        "DELETE FROM users WHERE user_id = ?",
        [id]
      );
      if (results.affectedRows > 0) {
        return true;
      } else {
        return false; // user not founded
      }
    } catch (error) {
      throw error;
    }
  }
}
