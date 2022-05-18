import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreatePetService } from "../services/CreatePetService";

@injectable()
export class CreatePetController {

  async handle(req: Request, res: Response): Promise<Response> {
    // The breed and the address are disabled until we have a proper implementation
    const {
      name,
      description,
      sex,
      age,
      weight,
      // breed_slug,
      // address_id,
    } = req.body;

    if (!name) {
      throw new AppError('The name property is required.', 400);
    }
    if (!description) {
      throw new AppError('The description property is required.', 400);
    }
    if (!sex) {
      throw new AppError('The sex property is required.', 400);
    }
    if (sex !== 'M' && sex !== 'F') {
      throw new AppError('The sex property needs to be M or F.')
    }

    const createPetService = container.resolve(
      CreatePetService
    );

    const petCreated = await createPetService.execute({
      name,
      description,
      sex,
      age,
      weight
    })

    return res.status(201).json(petCreated);
  }
}
