import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { DeletePetService } from "../services/DeletePetService";
import { GetPetByIdService } from "../services/GetPetByIdService";

interface IDeletePetRequest {
  id?: string;
}

@injectable()
export class DeletePetController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { id }: IDeletePetRequest = req.query;

    if (!id) {
      throw new AppError('The id property is required.', 400);
    }

    const getPetByIdService = container.resolve(
      GetPetByIdService
    );
    const deletePetService = container.resolve(
      DeletePetService
    );

    const petFound = await getPetByIdService.execute(id);
    if (!petFound) {
      throw new AppError('Pet not found.', 404);
    }

    await deletePetService.execute(id);

    return res.status(200).send({
      status: 'success',
      message: 'Pet deleted with success.'
    });
  }
}
