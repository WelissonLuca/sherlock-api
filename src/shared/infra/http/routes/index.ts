import { Router } from 'express';

import { ReportRouter } from './reports.routes';
import { UserRouter } from './user.routes';

const router = Router();

router.use('/accounts', UserRouter);
router.use('/reports', ReportRouter);

export { router };
