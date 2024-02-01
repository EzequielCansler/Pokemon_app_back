import { TeamModel } from "../models/mysql/team.js";

export class TeamController {
  static async getTeam(req, res, next) {
    const team = await TeamModel.getAllTeam();
    if (team.length > 0) {
      return res.status(200).json(team);
    } else {
      return res.status(404).send("No Teams Found");
    }
  }
  static async createTeam(req, res, next) {
    const create = await TeamModel.createTeam();
  }
  static async updateTeam(req, res, next) {}
  static async deleteTeam(req, res, next) {}
}
