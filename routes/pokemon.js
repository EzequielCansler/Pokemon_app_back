import { Router } from "express";
import { PokemonController } from "../controllers/pokemonController.js";

export const pokemonRouter = Router();

pokemonRouter.get("/:pokemonId", PokemonController.getPokemon);
// Crear pokemon
pokemonRouter.post("/", PokemonController.createPokemon);

// Eliminar pokemon
pokemonRouter.delete("/:pokemonId", PokemonController.deletePokemon);
