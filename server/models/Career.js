const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: String,

    company: String,

    location: String,

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Remote", "Internship"],
      default: "Full Time",
    },

    jobNumber: String,

    website: String,

    salary: String,

    vacancy: Number,

    applyDeadline: Date,

    shortDescription: String,

    description: String,

    requirements: [String],

    responsibilities: [String],

    tags: [String],

    featuredImage: String,

    isFeatured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Career", careerSchema);