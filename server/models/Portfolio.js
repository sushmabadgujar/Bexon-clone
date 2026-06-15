const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      unique: true
    },

    shortDescription: String,

    longDescription: String,

    overview: [
      {
        type: String
      }
    ],

    gallery: [
      {
        type: String 
      }
    ],

    clientName: String,

    budget: String,

    location: String,

    sector: String,

    completedAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);