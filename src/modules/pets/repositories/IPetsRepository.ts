import { Pet, PetSexType } from "@prisma/client";
import { ICreatePetProps } from "./repo.props/ICreatePetProps";
import { IUpdatePetProps } from "./repo.props/IUpdatePetProps";

export interface IPetsRepository {
  create(data: ICreatePetProps): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  getDetailed(id: string): Promise<Pet | null>;
  listAll(): Promise<Pet[]>;
  delete(id: string): Promise<boolean>;
  update(id: string, data: IUpdatePetProps): Promise<Pet>
}
