import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456",
  database: "pokemon_db",
};

const connection = await mysql.createConnection(config);

export class TeamModel {
  static async getAllTeam() {
    const [teams] = await connection.query("SELECT * FROM teams");
    return teams;
  }

  static async createTeam(team) {
    const [result] = await connection.query("INSERT INTO teams SET ?", team);
  }
  static async updateTeam() {}
  static async deleteTeamById(id) {
    const result = await connection.execute(`DELETE FROM teams WHERE id=?`, [
      id,
    ]);
    if (result.affectedRows === 0) throw new Error("No such team!");
  }
}
