import { PokemonModel } from "../models/mysql/pokemon.js";

export class PokemonController {
  static async getPokemon(req, res, next) {
    const { pokemonId } = req.params;

    const pokemon = await PokemonModel.getPokemonById(pokemonId);
    if (pokemon) {
      res.status(200).json({ message: "Success", data: pokemon });
    } else {
      res.status(404).json({ message: "No such Pokemon" });
    }
  }

  static async createPokemon(req, res, next) {
    const pokemonData = req.body;

    if (pokemonData.length > 5) {
      return res
        .status(400)
        .json({ error: "No se pueden crear mas de 5 Pokemon" });
    }
    try {
      const newPokemon = await Promise.all(
        pokemonData.map(async (pokemonData) => {
          try {
            return await PokemonModel.createPokemonModel(pokemonData);
          } catch (error) {
            console.error(
              `Error al crear Pokemon: ${pokemonData.poke_name}`,
              error
            );
            return null;
          }
        })
      );

      res.status(201).json(newPokemon);
    } catch (error) {
      console.log("Error en el pokemon", error);
      res.status(500).json({ error: "Error al crear el pokemon" });
    }
  }

  static async deletePokemon(req, res, next) {
    const { pokemonId } = req.params;

    try {
      await PokemonModel.deletePokemonById(pokemonId);
      res.status(200).json({ message: "Eliminado correctamente" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
