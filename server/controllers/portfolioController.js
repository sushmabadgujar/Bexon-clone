const Portfolio = require("../models/Portfolio");

// CREATE
exports.createPortfolio = async (req, res) => {
  try {
    const data = await Portfolio.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getAllPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// GET SINGLE (portfolio details page)
exports.getPortfolioBySlug = async (req, res) => {
  try {
    const data = await Portfolio.findOne({ slug: req.params.slug });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// UPDATE
exports.updatePortfolio = async (req, res) => {
  try {
    const data = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// DELETE
exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};