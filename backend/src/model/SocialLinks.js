const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialLinkSchema = new Schema(
  {
    platform: {
      type: String,
      required: true,
      enum: ["Github", "LinkedIn", "YouTube", "Twitter", "Instagram"],
    },
    url: {
      type: String,
      required: true,
      match: /^https?:\/\/.+/i, // url validation
    },
    iconClass: {
      type: String,
      required: true, // e.g "fa-brands fa-square-github"
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocialLink", socialLinkSchema);
