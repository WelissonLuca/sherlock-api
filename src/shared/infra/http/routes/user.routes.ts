import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticate-user/authenticate-user.controller';
import { CreateUserController } from '@modules/accounts/useCases/create-user/create-user.controller';

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

UserRouter.post('/users', createUserController.handle);
UserRouter.post('/login', authenticateUserController.handle);

export { UserRouter };
