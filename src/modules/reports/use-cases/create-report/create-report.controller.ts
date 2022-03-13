import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateReportDTO } from '@modules/reports/dtos/create-report.dto';

import { CreateReportUseCase } from './create-report.useCase';

class CreateReportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateReportDTO = request.body;

    const createReportUseCase = container.resolve(CreateReportUseCase);

    const report = await createReportUseCase.execute(data);

    return response.status(201).json(report);
  }
}

export { CreateReportController };
