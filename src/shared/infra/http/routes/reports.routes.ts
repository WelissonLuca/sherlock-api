import { Router } from 'express';

import { CreateReportController } from '@modules/reports/useCases/createReport/CreateReportController';
import { FindReportByIdController } from '@modules/reports/useCases/findReportById/FindReportByIdController';
import { FindReportsController } from '@modules/reports/useCases/findReports/FindReporsController';

const ReportRouter = Router();

const createReportController = new CreateReportController();
const findReportByIdController = new FindReportByIdController();
const findReportsController = new FindReportsController();

ReportRouter.post('/', createReportController.handle);
ReportRouter.get('/:id', findReportByIdController.handle);
ReportRouter.get('/', findReportsController.handle);

export { ReportRouter };
