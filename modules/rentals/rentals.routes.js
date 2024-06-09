import { Router } from "express";
import { createRental, deleteRental, getAllRentals, getSpecificRental, updateRental } from "./rentals.controller.js";


export const rentalRouter = Router();


rentalRouter.post("/", createRental)
rentalRouter.put("/:id", updateRental)
rentalRouter.delete("/:id", deleteRental)
rentalRouter.get("/", getAllRentals)
rentalRouter.get("/:id", getSpecificRental)



