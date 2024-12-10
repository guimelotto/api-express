import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import Joi from "joi";

export class UserController {
  static async getUsers(req: Request, res: Response): Promise<void> {
    const users = await UserService.getAllUsers();
    res.json(users);
  }

  static async getUser(req: Request, res: Response): Promise<void> {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
    });

    const { error } = schema.validate(req.params);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const user = await UserService.getUserById(Number(req.params.id));

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  }
}
