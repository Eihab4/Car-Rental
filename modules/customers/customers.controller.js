import { ObjectId } from "mongodb";
import { db } from "../../dataBases/dbConnection.dataBases.js";


// sign up api for customer
export const signUp = async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (name && email && password && phone) {
        const customer = await db.collection("customers").insertOne({
            name,
            email,
            password,
            phone,
        });
        if (customer.acknowledged) {
            res.status(201).json({ message: "success", customerId: customer.insertedId });
        } else {
            res.status(500).json({ message: "Failed to add customer" });
        }
    } else {
        res.status(400).json({ message: "Invalid data. All fields are required." });
    }
};

// get all customers

export const getAllUsers = async (req, res) => {
    const customers = await db.collection("customers").find({}).toArray();
    if (customers.length > 0) {
        res.json({ message: "customers", customers });
    } else {
        res.status(404).json({ message: "No customers found" });
    }
};

// sign in api for customer

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const customer = await db.collection("customer").findOne({ email, password });

        if (!customer) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json("customer signed in successfully");
    } else {
        res.json({ message: "Email and password are required" });
    }
};

// get a specific customer

export const getSpecificUser = async (req, res) => {
    const customerId = req.params.id
    if (!customerId) {
        return res.json({message:"invalid id"})
    }
    const customer = await db.collection("customers").findOne({ _id: ObjectId(customerId) })
    if (!customer) {
        return res.json({message:"no customer exist with this id"})
    }
    return res.status(200).json({message:"success"})
    
}

// Api for updating a customer "owner only"

export const updateCustomer = async (req, res) => {
    const customerId = req.params.id
    if (!customerId) {
        return res.json({message:"invalid id"})
    }
    const checkIfOwner = await db.collection("rentals").findOne({ customerId })
    if (checkIfOwner) {
        const { name, email, password, phone } = req.body;
        const customer = await db.collection("customers").updateOne({ _id: new ObjectId(customerId) }, { $set: { name, email, password, phone } })
        return res.status(200).json({message:"customer updated successfully"})
    }
    return res.status(400).json({message:"error updating customer"})
}

// Api for deleting a customer "owner only"

export const deleteCustomer = async (req, res) => {
    const customerId = req.params.id;
    if (!customerId) {
        return res.json({ message: "Invalid ID" });
    }
    const customerInRentals = await db.collection("rentals").findOne({ customerId: new ObjectId(customerId) });
    if (customerInRentals) {
        const customer = await db.collection("customers").deleteOne({ _id: new ObjectId(customerId) });
        if (customer.deletedCount === 1) {
            return res.status(200).json({ message: "Customer deleted successfully" });
        }
    }
    return res.status(400).json({ message: "Error deleting customer" });
};


