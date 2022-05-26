import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { GetPetByIdService } from "../services/GetPetByIdService";
import { UpdatePetService } from "../services/UpdatePetService";

@injectable()
export class UpdatePetController {

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      id,
      name,
      description,
      sex,
      age,
      weight,
    } = req.body;

    if (!id) {
      throw new AppError('The id property is required.', 400);
    }
    if (sex && sex !== 'M' && sex !== 'F') {
      throw new AppError('The sex property needs to be M or F.')
    }

    const updatePetService = container.resolve(
      UpdatePetService
    );
    const getPetById = container.resolve(
      GetPetByIdService
    );

    const petFound = await getPetById.execute(id);

    if (!petFound) {
      throw new AppError('Pet not found.', 404);
    }

    const petUpdated = await updatePetService.execute({
      id,
      name,
      description,
      sex,
      age,
      weight
    })

    return res.status(200).json(petUpdated);
  }
}
