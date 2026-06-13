// routes/portfolioRoutes.js

const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio
} = require("../controllers/portfolioController");

router.post("/create-portfolio", upload.array("gallery", 10),  createPortfolio);
router.get("/all-portfolio", getAllPortfolios);
router.get("/portfolio/:id", getPortfolioById);
router.put(
  "/portfolio/:id",
  upload.array("gallery", 10),
  updatePortfolio
);
// router.delete("/delete/:id", deletePortfolio);

module.exports = router;