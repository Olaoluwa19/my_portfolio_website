const mongoose = require("mongoose");

const techStackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // e.g., "JavaScript", "React", "MongoDB"
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "DevOps", "Other"], // Categorize skills
      required: true,
    },
    proficiency: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Intermediate", // Show skill level
    },
    iconUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // URL for tech logo (e.g., from CDN or DevIcons)
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
      default: 0, // Show experience duration
    },
    projectsUsedIn: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project", // Link to projects where this tech was used
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false, // Highlight key skills on portfolio
    },
    description: {
      type: String,
      trim: true, // Short description of expertise (e.g., "Built REST APIs with Node.js")
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TechStack", techStackSchema);
