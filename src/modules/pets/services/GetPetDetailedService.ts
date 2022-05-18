import { inject, injectable } from "tsyringe";

import { Pet } from "@prisma/client"
import { IPetsRepository } from "../repositories/IPetsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
export class GetPetDetailedService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute(id: string): Promise<Pet> {
    const petDetailed = await this.petsRepository.getDetailed(id);

    if (!petDetailed) {
      throw new AppError('Pet not found.', 404);
    }

    return petDetailed;
  }
}
