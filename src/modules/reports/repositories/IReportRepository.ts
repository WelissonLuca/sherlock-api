import { Report } from '@modules/reports/infra/typeorm/entities/Reports';

import { ICreateReportDTO } from '../dtos/ICreateReportDTO';

interface IReportRepository {
  create(data: ICreateReportDTO): Promise<Report>;
  findReports(): Promise<Report[]>;
  findReportById(id: string): Promise<Report | undefined>;
}

export { IReportRepository };
