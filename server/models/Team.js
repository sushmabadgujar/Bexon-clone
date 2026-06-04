const mongoose = require("mongoose");
const generateSlug = require("../utils/generateSlug");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },


    designation: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    shortBio: {
      type: String
    },

    about: {
      type: String
    },

    email: {
      type: String
    },

    phone: {
      type: String
    },

    location: {
      type: String
    },

    experience: {
      type: String
    },

    skills: [
      {
        name: String,
        percentage: Number
      }
    ],

    socialLinks: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String
    }
  },
  {
    timestamps: true
  }
);

// AUTO SLUG


module.exports = mongoose.model("Team", teamSchema);  