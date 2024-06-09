import { Router } from "express";
import { addCar, deleteCar, getAllCars, getSpecificCar, updateCar } from "./cars.controller.js";


export const carRouter = Router()

carRouter.post("/addCar", addCar)
carRouter.get("/getSpecificCar", getSpecificCar)
carRouter.get("/getAllCars", getAllCars)
carRouter.put("/:id",updateCar)
carRouter.delete("/:id", deleteCar)


