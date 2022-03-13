import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindReportByIdUseCase } from './FindReportByIdUseCase';

class FindReportByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findReportByIdUseCase = container.resolve(FindReportByIdUseCase);

    const report = await findReportByIdUseCase.execute(id);

    return response.status(200).json(report);
  }
}

export { FindReportByIdController };
