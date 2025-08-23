const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techStackSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("TechStack", techStackSchema);
