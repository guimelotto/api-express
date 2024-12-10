import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService {
  static async getAllUsers(): Promise<User[]> {
    return UserRepository.findAll();
  }

  static async getUserById(id: number): Promise<User | null> {
    return UserRepository.findById(id);
  }

  static async createUser(
    data: Omit<User, "id" | "createdAt" | "updatedAt">
  ): Promise<User> {
    return UserRepository.create(data as User);
  }
}
