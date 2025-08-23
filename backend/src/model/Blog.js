const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // e.g., "Building a Portfolio with React"
    },
    slug: {
      type: String,
      required: true,
      unique: true, // e.g., "building-portfolio-react" for SEO
    },
    content: {
      type: String,
      required: true, // Markdown or HTML content
    },
    excerpt: {
      type: String,
      trim: true, // Short summary for previews
    },
    tags: [
      {
        type: String, // e.g., ["React", "Tutorial", "WebDev"]
      },
    ],
    coverImage: {
      type: String,
      match: /^https?:\/\/.+/i, // Blog post thumbnail
    },
    published: {
      type: Boolean,
      default: false, // Draft vs. published status
    },
    publishedAt: {
      type: Date, // Publication date
    },
    readTime: {
      type: Number, // Estimated reading time in minutes
    },
    viewCount: {
      type: Number,
      default: 0, // Track post popularity
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
