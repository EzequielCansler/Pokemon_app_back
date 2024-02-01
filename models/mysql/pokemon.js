import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456",
  database: "pokemon_db",
};

const connection = await mysql.createConnection(config);

export class PokemonModel {
  static async createTeam(team) {
    const [result] = await connection.query("INSERT INTO pokemons SET ?", team);
  }
  static async deletePokemonById(id) {
    const result = await connection.execute(`DELETE FROM pokemons WHERE id=?`, [
      id,
    ]);
    if (result.affectedRows === 0) throw new Error("No such team!");
  }
}
