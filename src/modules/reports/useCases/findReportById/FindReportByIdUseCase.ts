import { inject, injectable } from 'tsyringe';

import { Report } from '@modules/reports/infra/typeorm/entities/Reports';
import { IReportRepository } from '@modules/reports/repositories/IReportRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class FindReportByIdUseCase {
  constructor(
    @inject('ReportRepository')
    private reportRepository: IReportRepository
  ) {}
  async execute(id: string): Promise<Report> {
    const report = await this.reportRepository.findReportById(id);

    if (!report) {
      throw new AppError('Report not found', 404);
    }

    return report;
  }
}

export { FindReportByIdUseCase };
