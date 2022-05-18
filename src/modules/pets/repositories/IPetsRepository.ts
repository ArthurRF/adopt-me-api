import { Pet } from "@prisma/client";
import { ICreatePetProps } from "./repo.props/ICreatePetProps";

export interface IPetsRepository {
  create(data: ICreatePetProps): Promise<Pet>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<Pet | null>;
  getDetailed(id: string): Promise<Pet | null>;
  listAll(): Promise<Pet[]>;
}
