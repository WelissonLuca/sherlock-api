import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { ReportRepository } from '@modules/reports/infra/typeorm/repositories/ReportRepository';
import { IReportRepository } from '@modules/reports/repositories/IReportRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IReportRepository>(
  'ReportRepository',
  ReportRepository
);
