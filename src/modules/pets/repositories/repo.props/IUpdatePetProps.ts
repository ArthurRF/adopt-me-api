import { PetSexType } from "@prisma/client";

interface IUpdatePetProps {
  name?: string;
  description?: string;
  sex?: PetSexType;
  age?: number;
  weight?: number;
}

export { IUpdatePetProps };
