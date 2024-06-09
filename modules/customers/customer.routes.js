import { Router } from "express";
import { deleteCustomer, getAllUsers, getSpecificUser, signIn, signUp, updateCustomer } from "./customers.controller.js";


export const customerRouter = Router()

customerRouter.post("/signUp", signUp)
customerRouter.post("/signIn", signIn)
customerRouter.get("/getSpecificUser", getSpecificUser)
customerRouter.get("/getAllUsers", getAllUsers)
customerRouter.put("/updateCustomer", updateCustomer)
customerRouter.delete("/deleteCustomer",deleteCustomer)


