import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/use-cases/authenticate-user/authenticate-user.controller';
import { CreateUserController } from '@modules/accounts/use-cases/create-user/create-user.controller';

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

UserRouter.post('/users', createUserController.handle);
UserRouter.post('/login', authenticateUserController.handle);

export { UserRouter };
