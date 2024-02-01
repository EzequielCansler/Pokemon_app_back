import { Router } from "express";
import { TeamController } from "../controllers/teamController.js";

export const teamRouter = Router();

// Obtener equipo
teamRouter.get("/", TeamController.getTeam);

// Crear equipo
teamRouter.post("/", TeamController.createTeam);

// Actualizar equipo
teamRouter.put("/:teamId", TeamController.updateTeam);

// Eliminar equipo
teamRouter.delete("/:teamId", TeamController.deleteTeam);
