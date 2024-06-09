import { ObjectId } from "mongodb";
import { db } from "../../dataBases/dbConnection.dataBases.js";




// api for adding a car

export const addCar = async (req, res) => {
    const { name, model, rentalStatus } = req.body
    if (!name || !model || !rentalStatus) {
        return res.json({ message: "all fields are required" })
    }
    const car = await db.collection("cars").insertOne({name,model,rentalStatus})
    if (car.acknowledged) {
        return res.status(201).json({ message: "car added successfully",carId:car.insertedId })
    }
        return res.json({ message: "error inserting the car" })
}

// api for getting a specific car

export const getSpecificCar = async (req, res) => {
    const carId = req.params.id;

    if (!carId) {
        return res.status(400).json({ message: "Invalid ID" });
    }

    const car = await db.collection("cars").findOne({ _id:new ObjectId(carId) });

    if (!car) {
        return res.status(404).json({ message: "Car not found" });
    }

    return res.status(200).json({ message: "Car retrieved successfully", car });
};

// api for getting all cars

export const getAllCars = async (req, res) => {
    const cars = await db.collection("cars").find({}).toArray();
    if (cars.length > 0) {
        return res.status(200).json({ message: "Cars retrieved successfully", cars });
    }
    return res.status(400).json({ message: "Cars retrieving error" });
};

// api for updating a car


export const updateCar = async (req, res) => {
    const carId = req.params.id;
    if (!carId) {
        return res.json({ message: "Invalid ID" });
    }
    const { name, model, rentalStatus } = req.body;
    if (!name || !model || !rentalStatus) {
        return res.json({ message: "All fields are required" });
    }
    const result = await db.collection("cars").updateOne(
        { _id: new ObjectId(carId) },
        { $set: { name, model, rentalStatus } }
    );
    if (result.modifiedCount > 0) {
        return res.status(200).json({ message: "Car updated successfully" });
    } else {
        return res.json({ message: "Error updating car or car not found" });
    }
};

// api for deleting a car

export const deleteCar = async (req, res) => {
    const carId = req.params.id
    if (!carId) {
        return res.json({ message: "Invalid ID" });
    }
    const car = await db.collection("cars").deleteOne({ _id: new ObjectId(carId) })
    if (car.deletedCount > 0) {
        return res.status(200).json({ message: "Car deleted successfully" });
    } else {
        return res.json({ message: "Error deleting car or car not found" });
    }
}
