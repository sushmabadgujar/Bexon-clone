const PricingPlan = require("../models/PricingPlan");

// CREATE PRICING PLAN
const createPricingPlan = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      price,
      billingCycle,
      features,
      buttonText,
      isFeatured,
      status,
      displayOrder,
    } = req.body;

    const pricingPlan = await PricingPlan.create({
      title,
      subtitle,
      price,
      billingCycle,
      features,
      buttonText,
      isFeatured,
      status,
      displayOrder,
    });

    res.status(201).json({
      success: true,
      pricingPlan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL PRICING PLANS
const getPricingPlans = async (req, res) => {
  try {
    const pricingPlans = await PricingPlan.find().sort({
      displayOrder: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: pricingPlans.length,
      pricingPlans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE PRICING PLAN
const getPricingPlanById = async (req, res) => {
  try {
    const pricingPlan = await PricingPlan.findById(req.params.id);
    console.log(pricingPlan);
    if (!pricingPlan) {
      return res.status(404).json({
        success: false,
        message: "Pricing plan not found",
      });
    }

    res.status(200).json({
      success: true,
      pricingPlan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE PRICING PLAN
const updatePricingPlan = async (req, res) => {
  try {
    const pricingPlan = await PricingPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!pricingPlan) {
      return res.status(404).json({
        success: false,
        message: "Pricing plan not found",
      });
    }

    res.status(200).json({
      success: true,
      pricingPlan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE PRICING PLAN
const deletePricingPlan = async (req, res) => {
  try {
    const pricingPlan = await PricingPlan.findByIdAndDelete(
      req.params.id
    );

    if (!pricingPlan) {
      return res.status(404).json({
        success: false,
        message: "Pricing plan not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pricing plan deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPricingPlan,
  getPricingPlans,
  getPricingPlanById,
  updatePricingPlan,
  deletePricingPlan,
};