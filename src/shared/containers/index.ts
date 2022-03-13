import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/user.repository';
import { IUserRepository } from '@modules/accounts/repositories/user-repository.interface';
import { ReportRepository } from '@modules/reports/infra/typeorm/repositories/ReportRepository';
import { IReportRepository } from '@modules/reports/repositories/IReportRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IReportRepository>(
  'ReportRepository',
  ReportRepository
);
