import { inject, injectable } from "tsyringe";
import { PetSexType, Pet } from "@prisma/client";

import { IPetsRepository } from "../repositories/IPetsRepository";

interface IRequest {
  name: string;
  description: string;
  sex: PetSexType;
  age?: number;
  weight?: number;
}

@injectable()
export class CreatePetService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository
  ) {}

  async execute({
    name,
    description,
    sex,
    age,
    weight
  }: IRequest): Promise<Pet> {
    return this.petsRepository.create({
      name,
      description,
      sex,
      age,
      weight
    });
  }
}
