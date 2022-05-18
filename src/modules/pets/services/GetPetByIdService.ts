import { inject, injectable } from "tsyringe";

import { Pet } from "@prisma/client"
import { IPetsRepository } from "../repositories/IPetsRepository";

@injectable()
export class GetPetByIdService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute(id: string): Promise<Pet | null> {
    return await this.petsRepository.findById(id);
  }
}
