const express = require("express");
const router = express.Router();

const {
  createCareer,
  getCareers,
  getCareerById,
  updateCareer,
  deleteCareer,
} = require("../controllers/careerController");

const upload = require("../middleware/upload");

router.post(
  "/career",
  upload.single("featuredImage"),
  createCareer
);

router.get("/career", getCareers);

router.get(
  "/career/:id",
  getCareerById
);

router.put(
  "/career/:id",
  upload.single("featuredImage"),
  updateCareer
);

router.delete(
  "/career/:id",
  deleteCareer
);

module.exports = router;