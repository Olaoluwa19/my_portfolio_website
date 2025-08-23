const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
      trim: true, // e.g., "University of Lagos"
    },
    degree: {
      type: String,
      required: true,
      trim: true, // e.g., "BSc Computer Science"
    },
    fieldOfStudy: {
      type: String,
      trim: true, // e.g., "Computer Science"
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date, // Nullable if ongoing
    },
    grade: {
      type: String, // e.g., "First Class", "GPA: 3.8/4.0"
    },
    achievements: [
      {
        type: String, // e.g., "Dean's List", "Best Thesis Award"
      },
    ],
    certificateUrl: {
      type: String,
      match: /^https?:\/\/.+/i, // Link to certificate PDF/image
    },
    isOngoing: {
      type: Boolean,
      default: false, // For current studies
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);
