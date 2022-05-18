import { inject, injectable } from "tsyringe";
import { Pet } from "@prisma/client";

import { IPetsRepository } from "../repositories/IPetsRepository";

@injectable()
export class DeletePetService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute(id: string): Promise<boolean> {
    return this.petsRepository.delete(id);
  }
}
