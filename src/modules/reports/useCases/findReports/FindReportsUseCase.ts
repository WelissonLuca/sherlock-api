import { inject, injectable } from 'tsyringe';

import { Report } from '@modules/reports/infra/typeorm/entities/Reports';
import { IReportRepository } from '@modules/reports/repositories/IReportRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class FindReportsUseCase {
  constructor(
    @inject('ReportRepository')
    private reportRepository: IReportRepository
  ) {}
  async execute(): Promise<Report[]> {
    const report = await this.reportRepository.findReports();

    if (!report) {
      throw new AppError('Not Reports Registered', 404);
    }

    return report;
  }
}

export { FindReportsUseCase };
