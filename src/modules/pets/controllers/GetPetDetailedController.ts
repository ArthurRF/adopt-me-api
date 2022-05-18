import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { GetPetDetailedService } from "../services/GetPetDetailedService";

interface IGetPetDetailedRequest {
  id?: string;
}

@injectable()
export class GetPetDetailedController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { id }: IGetPetDetailedRequest = req.params;

    if (!id) {
      throw new AppError('The id property is required.', 400);
    }

    const getPetDetailedService = container.resolve(
      GetPetDetailedService
    );

    const petFound = await getPetDetailedService.execute(id);

    return res.status(200).send(petFound);
  }
}
