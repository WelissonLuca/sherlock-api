import { ICreateUserDTO } from '@modules/accounts/dtos/create-user.dto';
import { User } from '@modules/accounts/infra/typeorm/entities/user.entity';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
