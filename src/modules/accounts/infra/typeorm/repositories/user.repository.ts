import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/create-user.dto';
import { IUserRepository } from '@modules/accounts/repositories/user-repository.interface';

import { User } from '../entities/user.entity';

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
