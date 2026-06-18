const express = require("express");

const router = express.Router();

const {
  createPricingPlan,
  getPricingPlans,
  getPricingPlanById,
  updatePricingPlan,
  deletePricingPlan,
} = require("../controllers/pricingPlanController");

// CREATE
router.post("/", createPricingPlan);

// GET ALL
router.get("/", getPricingPlans);

// GET SINGLE
router.get("/edit/:id", getPricingPlanById);

// UPDATE
router.put("/:id", updatePricingPlan);

// DELETE
router.delete("/:id", deletePricingPlan);

module.exports = router;