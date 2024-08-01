import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
	},
});

const User = model("User", userSchema);

export default User;
