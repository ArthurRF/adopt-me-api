import { container } from "tsyringe";

import { IPetsRepository } from "@modules/pets/repositories/IPetsRepository";
import { PetsRepository } from "@modules/pets/repositories/implementations/PetsRepository";

container.registerSingleton<IPetsRepository>(
  'PetsRepository',
  PetsRepository
)
