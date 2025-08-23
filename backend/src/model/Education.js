const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("Education", educationSchema);
