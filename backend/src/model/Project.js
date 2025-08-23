const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
