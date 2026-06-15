const Portfolio = require("../models/Portfolio");
const generateSlug = require("../utils/generateSlug");
const parseJSON = require("../utils/parseJSON");
const fs = require("fs");
const path = require("path");

// ============= Create ==================
const createPortfolio = async (req, res) => {
  try {
    const body = parseJSON(req.body);
    const {
      title,
      shortDescription,
      longDescription,
      overview,
      clientName,
      budget,
      location,
      sector,
      completedAt
    } = body;
    const slug = generateSlug(title);
    console.log("BODY =>", req.body);
    console.log("FILE =>", req.file);
    console.log("FILES =>", req.files);
    const gallery = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    const data = await Portfolio.create({
      title,
      shortDescription,
      longDescription,
      overview,
      clientName,
      budget,
      location,
      sector,
      completedAt,
      gallery,
      slug
    });

    res.status(201).json({
      success: true,
      data: data,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============== Get All =====================
const getAllPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

//============= GET SINGLE ===============
const getPortfolioById = async (req, res) => {
  try {
    const data = await Portfolio.findById(req.params.id);

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// ============= Update Portfolio =================
const updatePortfolio = async (req, res) => {
  try {
    const body = JSON.parse(JSON.stringify(req.body));
    const portfolio = await Portfolio.findById(req.params.id);
    let existingGallery = portfolio.gallery || [];
    const newGallery = req.files
      ? req.files.map((f) => `/uploads/${f.filename}`)
      : [];
    const finalGallery = [...existingGallery, ...newGallery];
    const updatedData = {
      ...body,
      overview: body.overview ? body.overview.split(",") : [],
      gallery: finalGallery,
    };

    const data = await Portfolio.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ============= Delete PortFolio sperate image =============

const deletePortfolioImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    portfolio.gallery = portfolio.gallery.filter(
      (img) => img !== image
    );

    await portfolio.save();

    const filePath = path.join(
      __dirname,
      "..",
      image.replace(/^\//, "")
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//================ Delete Portfolio ========================

const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    // Delete all gallery images
    if (portfolio.gallery && portfolio.gallery.length > 0) {
      portfolio.gallery.forEach((image) => {
        const imagePath = path.join(__dirname, "..", image);

        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Image delete error:", err.message);
          }
        });
      });
    }

    await Portfolio.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Portfolio and images deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createPortfolio, getAllPortfolios, getPortfolioById, updatePortfolio, deletePortfolioImage,deletePortfolio
};
