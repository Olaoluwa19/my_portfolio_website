const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
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
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
    techStack: [
      {
        type: Schema.Types.ObjectId,
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
    videoUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // Link to YouTube video
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
