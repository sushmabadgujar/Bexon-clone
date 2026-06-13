const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
      // trim: true
    },

    slug: {
      type: String,
      unique: true
    },

    shortDescription: {
      type: String,
      required: true
    },

    longDescription: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    icon: {
      type: String
    },

    features: {
      type: [String],
      default: []
    },

    category: {
      type: String,
      default: "general"
    },

    isFeatured: {
      type: Boolean,
      default: false
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);