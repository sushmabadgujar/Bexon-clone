const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
} = require("../controllers/serviceController");

const authMiddleware = require("../middleware/authMiddleware");

// PUBLIC ROUTES
router.get("/", getAllServices);

router.get("/:id", getServiceById);

// ADMIN ROUTES
router.post("/",upload.single("image"), authMiddleware, createService);

router.put(
  "/:id",
  upload.single("image"),
  authMiddleware,
  updateService
);
router.delete("/:id", authMiddleware, deleteService);

module.exports = router;