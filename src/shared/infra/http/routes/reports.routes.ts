import { Router } from 'express';

import { CreateReportController } from '@modules/reports/use-cases/create-report/create-report.controller';
import { FindReportByIdController } from '@modules/reports/use-cases/find-report-by-id/find-report-by-id.controller';
import { FindReportsController } from '@modules/reports/use-cases/find-reports/find-reports.controller';

const ReportRouter = Router();

const createReportController = new CreateReportController();
const findReportByIdController = new FindReportByIdController();
const findReportsController = new FindReportsController();

ReportRouter.post('/', createReportController.handle);
ReportRouter.get('/:id', findReportByIdController.handle);
ReportRouter.get('/', findReportsController.handle);

export { ReportRouter };
