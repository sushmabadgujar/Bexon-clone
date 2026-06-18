// routes/blogRoutes.js

const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  // addComment
} = require("../controllers/blogController");

router.post("/create-blog", createBlog);
router.get("/get-blog", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

// comments
// router.post("/:id/comment", addComment);

module.exports = router;
