import { Report } from '@modules/reports/infra/typeorm/entities/reports.entity';

import { ICreateReportDTO } from '../dtos/create-report.dto';

interface IReportRepository {
  create(data: ICreateReportDTO): Promise<Report>;
  findReports(): Promise<Report[]>;
  findReportById(id: string): Promise<Report | undefined>;
}

export { IReportRepository };
