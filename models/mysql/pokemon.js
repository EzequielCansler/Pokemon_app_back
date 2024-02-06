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
  static async getPokemonById(id) {
    const [result] = await connection.query(
      "SELECT * FROM pokemons WHERE pokemon_id=?",
      [id]
    );
    return result;
  }

  static async createPokemonModel(pokemon) {
    const { poke_name, type1, type2, photo_url } = pokemon;
    if (!poke_name || !type1 || !photo_url) {
      throw new Error("Missing required fields");
    } else {
      const result = await connection.execute(
        `INSERT INTO pokemons (poke_name, type1, type2, photo_url) VALUES(?, ?, ?, ?)`,
        [poke_name, type1, type2, photo_url]
      );
      return result[0].insertId;
    }
  }

  static async deletePokemonById(id) {
    const result = await connection.execute(
      `DELETE FROM pokemons WHERE pokemon_id=?`,
      [id]
    );
    if (result.affectedRows === 0) throw new Error("No such team!");
  }
}
