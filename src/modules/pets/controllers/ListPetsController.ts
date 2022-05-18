import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ListPetsService } from "../services/ListPetsService";

@injectable()
export class ListPetsController {

  async handle(req: Request, res: Response): Promise<Response> {
    const listPetsService = container.resolve(
      ListPetsService
    );

    const pets = await listPetsService.execute();

    return res.status(200).send(pets);
  }
}
