import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindReportsUseCase } from './FindReportsUseCase';

class FindReportsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findReportsdUseCase = container.resolve(FindReportsUseCase);

    const report = await findReportsdUseCase.execute();

    return response.status(200).json(report);
  }
}

export { FindReportsController };
