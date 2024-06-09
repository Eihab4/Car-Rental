import { ObjectId } from "mongodb";
import { db } from "../../dataBases/dbConnection.dataBases.js";


// Api for getting honda and toyota cars (you can change them with any models you want)
export const carsModelsHondaAndToyota = async (req, res) => {
    const honda = req.params.m1
    const toyota = req.params.m2
    if (!honda || !toyota) { return res.json({ message: "Invalid models" }) }
    const result = await db.collection("cars").find({ model: { $in: ["Toyota", "Honda"] } }).toArray();
    if (result.length === 0) {
        return res.json({message:"no cars found from these models"})
    }
    return res.status(200).json({message:"cars retrieved successfully",cars:result})
}

// Api for getting available cars with specific model

export const availableCarsWithSpecificModel = async (req, res) => {
    const model = req.params.model
    if (!model) { return res.json({ message: "Invalid models" }) }
    const result = await db.collection("cars").find({ rentalStatus: "available", model}).toArray()
    if (result.length === 0) {
        return res.json({message:"no available cars found from these models"})
    }
    return res.status(200).json({message:"cars retrieved successfully",cars:result})
}

// Api to Get Cars that are Either rented or of a Specific Model.

export const carsRentedOrSpecificModel = async (req, res) => {
    const model = req.params.model
    if (!model) { return res.json({ message: "Invalid models" }) }
    const result = await db.collection("cars").find({ $or: [{ rentalStatus: "rented" },{model}]}).toArray()
    if (result.length === 0) {
        return res.json({message:"no available cars found"})
    }
    return res.status(200).json({message:"cars retrieved successfully",cars:result})
}

// APi to Get Available Cars of Specific Models or Rented Cars of a Specific Model

export const availableAndRentedCarsWithSpecificModel = async (req, res) => {
    const model = req.params.model
    if (!model) { return res.json({ message: "Invalid models" }) }
    const result = await db.collection("cars").find({$or:[{rentalStatus:"available",model},{rentalStatus:"rented",model}]}).toArray()
    if (result.length === 0) {
        return res.json({message:"no available cars found from these models"})
    }
    return res.status(200).json({message:"cars retrieved successfully",cars:result})
}


