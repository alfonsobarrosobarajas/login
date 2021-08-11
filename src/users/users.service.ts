import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  // Arreglo de usuarios, para probar el login
  private readonly users = [
    { userId: 1, userName: 'Floor', password: 'Root.1234' },
    { userId: 2, userName: 'Anakin', password: 'sith' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === username);
  }
}
