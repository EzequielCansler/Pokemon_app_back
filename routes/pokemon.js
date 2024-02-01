import { Router } from "express";
import { PokemonController } from "../controllers/pokemonController.js";

export const pokemonRouter = Router();

// Crear pokemon
pokemonRouter.post("/", PokemonController.createPokemom);

// Eliminar pokemon
pokemonRouter.delete("/:pokemonId", PokemonController.deletePokemon);
