const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, { versionKey: false });

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;