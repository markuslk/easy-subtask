import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import User from "./models/User.js";

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("mongoose connected with mongoDB"))
	.catch((err) => console.log(err));
const app = express();
const port = 3000;

app.use("/users", bodyParser.json());

app.listen(port, () => {
	console.log(`example app is listening on port ${port} - Create users by sending a POST request to endpoint /users with JSON request body
        {
            "name": "name value",
            "email": "email value"
        }`);
});

app.post("/users", async (req, res) => {
	const { name, email } = req.body;

	if (!name || !email) {
		return res.status(400).json({ message: "Request body needs to have email and name to create user" });
	}
	try {
		const user = new User({ name, email });
		await user.save();
		return res.status(201).json({ message: "User created", user });
	} catch (err) {
		return res.status(500).json({ message: "Error creating user", error: err });
	}
});

app.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		return res.status(201).json({ message: "All users from database", users });
	} catch (err) {
		return res.status(500).send({ message: "Error getting users", error: err });
	}
});
