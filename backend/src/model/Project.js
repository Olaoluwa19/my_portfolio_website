const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // e.g., "Portfolio Website"
    },
    description: {
      type: String,
      required: true, // Detailed project overview
    },
    techStack: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TechStack", // Link to technologies used
      },
    ],
    liveUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // Link to live demo
    },
    repoUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // Link to GitHub repo
    },
    imageUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // Project screenshot/thumbnail
    },
    tags: [
      {
        type: String, // e.g., ["Web", "Full-Stack", "React"]
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false, // Highlight on homepage
    },
    completionDate: {
      type: Date, // When project was completed
    },
    viewCount: {
      type: Number,
      default: 0, // Track project popularity
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
