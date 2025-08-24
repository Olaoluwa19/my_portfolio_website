const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: [
        {
          type: Number,
          enum: [3452, 6783],
        },
      ],
      default: [3452],
    },
    image: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    techStack: {
      type: Schema.Types.ObjectId,
      ref: "TechStack",
    },
    education: {
      type: Schema.Types.ObjectId,
      ref: "Education",
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    socialLink: {
      type: Schema.Types.ObjectId,
      ref: "SocialLink",
    },
    resume: {
      type: String,
    },
    coverLetter: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
