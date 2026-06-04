// routes/blogRoutes.js

const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  addComment
} = require("../controllers/blogController");

router.post("/create-blog", createBlog);
router.get("/get-blog", getAllBlogs);
router.get("/:slug", getBlogBySlug);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

// comments
router.post("/:id/comment", addComment);

module.exports = router;
