import { Router } from "express";
import { availableAndRentedCarsWithSpecificModel, availableCarsWithSpecificModel, carsModelsHondaAndToyota, carsRentedOrSpecificModel } from "./specialApi.controller.js";

export const specialApiRouter = Router();

specialApiRouter.get("/models/:m1/:m2", carsModelsHondaAndToyota);
specialApiRouter.get("/available/:model", availableCarsWithSpecificModel);
specialApiRouter.get("/rented-or-specific/:model", carsRentedOrSpecificModel);
specialApiRouter.get("/available-and-rented/:model", availableAndRentedCarsWithSpecificModel);
