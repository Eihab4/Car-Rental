import { ObjectId } from "mongodb";
import { db } from "../../dataBases/dbConnection.dataBases.js";


//Api for creating a rental

export const createRental = async (req, res) => {
    const { carId, customerId, rentalDate, returnDate } = req.body;
    if (!carId || !customerId || !rentalDate || !returnDate) {
        return res.json({ message: "All fields are required" });
    }
    const rental = {
        carId,
        customerId,
        rentalDate,
        returnDate
    };
    const result = await db.collection("rentals").insertOne(rental);
    if (result.acknowledged) {
        return res.status(201).json({ message: "Rental created successfully", rentalId: result.insertedId });
    } else {
        return res.json({ message: "Error creating rental" });
    }
};

// Api for updating a rental

export const updateRental = async (req, res) => {
    const rentalId = req.params.id
    if (!rentalId) { return res.json({ message: "invalid id" }); }
    const { carId, customerId, rentalDate, returnDate } = req.body;
    if (!carId || !customerId || !rentalDate || !returnDate) {
        return res.json({ message: "All fields are required" });
    }
    const result = await db.collection("rentals").updateOne({ _id: new ObjectId(rentalId) },{$set:{carId,customerId,rentalDate,returnDate}})
    if (result.modifiedCount === 1) {
        return res.status(200).json({message:"rental updated successfully"})
    }
    return res.json({ message: "error updating rental" });
}

// Api for deleting a rental

export const deleteRental = async (req, res) => {
    const rentalId = req.params.id
    if (!rentalId) { return res.json({ message: "invalid id" }); }
    const result = await db.collection("rentals").deleteOne({ _id: new ObjectId(rentalId) })
    if (result.deletedCount === 1) {
        return res.status(200).json({message:"rental deleted successfully"})
    }
    return res.status(400).json({ message: "error deleting rental" });
}

// Api for getting all rental

export const getAllRentals = async (req, res) => {
    const result = await db.collection("rentals").find({}).toArray();
    if (result.length > 0) {
        return res.status(200).json({ message: "All rentals retrieved successfully", rentals: result });
    }
    return res.status(400).json({ message: "Error retrieving rentals" });
};


// Api for getting specific rental

export const getSpecificRental = async (req, res) => {
    const rentalId = req.params.id;
    if (!rentalId) {
        return res.json({ message: "Invalid ID" });
    }
    const result = await db.collection("rentals").findOne({ _id: new ObjectId(rentalId) });
    if (result) {
        return res.status(200).json({ message: "Specific rental retrieved successfully", rental: result });
    } else {
        return res.json({ message: "Rental not found" });
    }
};
