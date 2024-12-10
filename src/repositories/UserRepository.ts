import { User } from "../models/User";

// Lista mockada só como exemplo de uso
const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Async para simular chamada de API ou de banco de dados
export class UserRepository {
  static async findAll(): Promise<User[]> {
    return mockUsers;
  }

  static async findById(id: number): Promise<User | null> {
    return mockUsers.find((user) => user.id === id) || null;
  }

  static async create(user: User): Promise<User> {
    const newUser = {
      ...user,
      id: mockUsers.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
