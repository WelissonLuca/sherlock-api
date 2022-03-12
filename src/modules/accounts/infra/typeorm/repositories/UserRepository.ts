import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';

import { User } from '../entities/Users';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    const result = await this.repository.save(user);

    return result;
  }
  async findByEmail(email: string): Promise<User> {
    const result = await this.repository.findOne({
      email,
    });

    return result;
  }
}

export { UserRepository };
