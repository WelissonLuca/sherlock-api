import { inject, injectable } from 'tsyringe';

import { Report } from '@modules/reports/infra/typeorm/entities/Reports';
import { IReportRepository } from '@modules/reports/repositories/IReportRepository';

interface IReportRequest {
  localization: {
    latitude: string;
    longitude: string;
    thumb: string;
  };
  status: string;
  problem: string;
  description: string;
}

@injectable()
class CreateReportUseCase {
  constructor(
    @inject('ReportRepository')
    private reportRepository: IReportRepository
  ) {}
  async execute(data: IReportRequest): Promise<Report> {
    const createdReport = await this.reportRepository.create(data);

    return createdReport;
  }
}

export { CreateReportUseCase };
