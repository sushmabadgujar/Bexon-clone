const Blog = require("../models/Blog");
const generateSlug = require("../utils/generateSlug");

// CREATE BLOG
const createBlog = async (req, res) => {
    try {
        const { title, shortDescription, content, longDescription, featuredImage, author, tags, category, comments, isPublished } = req.body;

        const slug = generateSlug(title);

        const blog = await Blog.create({
            slug, title, shortDescription, content, longDescription,
            featuredImage,
            author, tags, category, comments, isPublished
        });
        res.status(201).json({ success: true, blog });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET ALL BLOGS (listing page)
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json({ success: true, blogs });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};

// GET SINGLE BLOG (blog details page)
const getBlogById = async (req, res) => {
  try {
    console.log("working");
    console.log(req.params.id);

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.json({
      success: true,
      blog,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// UPDATE BLOG
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ success: true, blog });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};

// DELETE BLOG
deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Blog deleted" });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};

// ADD COMMENT
exports.addComment = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        blog.comments.push(req.body);
        await blog.save();

        res.json({ success: true, comments: blog.comments });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};

module.exports = {
 createBlog,getAllBlogs,getBlogById,updateBlog,deleteBlog
};