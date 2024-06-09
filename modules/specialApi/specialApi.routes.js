import { Router } from "express";
import { availableAndRentedCarsWithSpecificModel, availableCarsWithSpecificModel, carsModelsHondaAndToyota, carsRentedOrSpecificModel } from "./specialApi.controller.js";



export const specialApiRouter = Router()

specialApiRouter.get("/:m1/:m2", carsModelsHondaAndToyota);
specialApiRouter.get("/:model", availableCarsWithSpecificModel);
specialApiRouter.get("/:model", carsRentedOrSpecificModel)
specialApiRouter.get("/model",availableAndRentedCarsWithSpecificModel)
