import { inject, injectable } from "tsyringe";

import { Pet } from "@prisma/client"
import { IPetsRepository } from "../repositories/IPetsRepository";

@injectable()
export class ListPetsService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute(): Promise<Pet[]> {
    return await this.petsRepository.listAll();
  }
}
