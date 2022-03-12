import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
UserRouter.post('/users', createUserController.handle);
UserRouter.post('/login', authenticateUserController.handle);
export { UserRouter };
