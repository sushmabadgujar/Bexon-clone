const express = require("express");

const router = express.Router();

const { register, login, getProfile, updateProfile } = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

// Register [http://localhost:5000/api/auth/register]
router.post("/register", register);

// Login [http://localhost:5000/api/auth/login]
router.post("/login", login);

// Admin Profile [http://localhost:5000/api/auth/profile]
router.get("/profile", authMiddleware, adminMiddleware, getProfile);

// Update Profile [http://localhost:5000/api/auth/profile]
router.put("/profile",
  authMiddleware,
  upload.single("profilePic"),
  async (req, res, next) => {
    console.log("BODY =>", req.body);
    console.log("FILE =>", req.file);
    next();
  },
  adminMiddleware,
  updateProfile

);
module.exports = router;