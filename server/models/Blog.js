// models/Blog.js

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const blogSchema = new mongoose.Schema(
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

    content: {
      type: String, // HTML content
      required: true
    },

    featuredImage: String,

    author: {
      name: String,
      image: String
    },

    category: {
      type: String
    },

    tags: [
      {
        type: String
      }
    ],

    comments: [commentSchema],

    isPublished: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);