import { getRepository, Repository } from 'typeorm';

import { ICreateReportDTO } from '@modules/reports/dtos/create-report.dto';
import { IReportRepository } from '@modules/reports/repositories/report.repository.interface';

import { Report } from '../entities/reports.entity';

class ReportRepository implements IReportRepository {
  private repository: Repository<Report>;

  constructor() {
    this.repository = getRepository(Report);
  }

  async create(data: ICreateReportDTO): Promise<Report> {
    const report = this.repository.create(data);

    const result = await this.repository.save(report);

    return result;
  }
  async findReportById(id: string): Promise<Report> {
    const result = await this.repository.findOne(id);

    return result;
  }

  async findReports(): Promise<Report[]> {
    const result = await this.repository.find();

    return result;
  }
}

export { ReportRepository };
