// routes/portfolioRoutes.js

const express = require("express");
const router = express.Router();

const {
  createPortfolio,
  getAllPortfolios,
  getPortfolioBySlug,
  updatePortfolio,
  deletePortfolio
} = require("../controllers/portfolioController");

router.post("/create-portfolio", createPortfolio);
router.get("/all-portfolio", getAllPortfolios);
router.get("/:slug", getPortfolioBySlug);
router.put("/edit/:id", updatePortfolio);
router.delete("/delete/:id", deletePortfolio);

module.exports = router;