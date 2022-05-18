import { Router } from "express";
import { container } from "tsyringe";
import { RateLimiterMiddleware } from "../middlewares/RateLimiterMiddleware";

import { CreatePetController } from "@modules/pets/controllers/CreatePetController";
import { DeletePetController } from "@modules/pets/controllers/DeletePetController";
import { GetPetDetailedController } from "@modules/pets/controllers/GetPetDetailedController";
import { ListPetsController } from "@modules/pets/controllers/ListPetsController";
import { UpdatePetController } from "@modules/pets/controllers/UpdatePetController";

const createPetController = container.resolve(CreatePetController);
const listPetsController = container.resolve(ListPetsController);
const getPetDetailedController = container.resolve(GetPetDetailedController);
const deletePetController = container.resolve(DeletePetController);
const updatePetController = container.resolve(UpdatePetController);

const petsRoutes = Router();

petsRoutes.post("/", RateLimiterMiddleware, createPetController.handle);
petsRoutes.get("/", RateLimiterMiddleware, listPetsController.handle);
petsRoutes.get("/:id", RateLimiterMiddleware, getPetDetailedController.handle);
petsRoutes.delete("/", RateLimiterMiddleware, deletePetController.handle);
petsRoutes.patch("/", RateLimiterMiddleware, updatePetController.handle);

export { petsRoutes };
