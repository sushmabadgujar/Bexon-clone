const mongoose = require("mongoose");

const pricingPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    billingCycle: {
      type: String,
      default: "month",
    },

    features: [
      {
        type: String,
      },
    ],

    buttonText: {
      type: String,
      default: "Choose Plan",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PricingPlan", pricingPlanSchema);