import { inject, injectable } from "tsyringe";
import { PetSexType, Pet } from "@prisma/client";

import { IPetsRepository } from "../repositories/IPetsRepository";

interface IRequest {
  id: string;
  name?: string;
  description?: string;
  sex: PetSexType;
  age?: number;
  weight?: number;
}

@injectable()
export class UpdatePetService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute({
    id,
    name,
    description,
    sex,
    age,
    weight
  }: IRequest): Promise<Pet> {
    return this.petsRepository.update(
      id,
      {
        name,
        description,
        sex,
        age,
        weight
      }
    );
  }
}
