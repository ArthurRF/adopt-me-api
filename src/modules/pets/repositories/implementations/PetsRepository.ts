import { Pet, PetSexType } from "@prisma/client";
import prisma from "@shared/infra/prisma";
import { IPetsRepository } from "../IPetsRepository";
import { ICreatePetProps } from "../repo.props/ICreatePetProps";
import { IUpdatePetProps } from "../repo.props/IUpdatePetProps";


export class PetsRepository implements IPetsRepository {
  public async create({
    name,
    description,
    sex,
    age,
    weight
  }: ICreatePetProps): Promise<Pet> {
    return prisma.pet.create({
      data: {
        name,
        description,
        sex,
        age,
        weight
      }
    });
  }

  public async findById(id: string): Promise<Pet | null> {
    return prisma.pet.findFirst({
      where: { id, active: true }
    });
  }

  public async getDetailed(id: string): Promise<Pet | null> {
    return prisma.pet.findFirst({
      where: { id, active: true }
    });
  }

  public async listAll(): Promise<Pet[]> {
    return prisma.pet.findMany({
      where: { active: true }
    })
  }

  public async delete(id: string): Promise<boolean> {
    await prisma.pet.update({
      data: {
        active: false
      },
      where: { id }
    });

    return true;
  }

  public async update(id: string, data: IUpdatePetProps): Promise<Pet> {
    return prisma.pet.update({
      where: { id },
      data,
    });
  }
}
