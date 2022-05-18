import { PetSexType } from "@prisma/client";

interface ICreatePetProps {
  name: string;
  description: string;
  sex: PetSexType;
  age?: number;
  weight?: number;
}

export { ICreatePetProps };
