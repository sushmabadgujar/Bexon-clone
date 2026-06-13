const Portfolio = require("../models/Portfolio");
const generateSlug = require("../utils/generateSlug");
const parseJSON = require("../utils/parseJSON");
const fs = require("fs");
const path = require("path");


// const createPortfolio = async (req, res) => {
//   console.log(req.data);
//   try {
//     // const {
//     //   title,
//     //   slug,
//     //   shortDescription,
//     //   longDescription,
//     //   overview,
//     //   clientName,
//     //   budget,
//     //   location,
//     //   sector,
//     //   completedAt
//     // } = req.body;
//    console.log("working");
//     // 🖼️ gallery images (multer files)
//     // const gallery = req.files
//     //   ? req.files.map((file) => file.path || file.filename)
//     //   : [];

//     const data = await Portfolio.create({
//       title,
//       slug,
//       shortDescription,
//       longDescription,
//       overview: overview
//         ? Array.isArray(overview)
//           ? overview
//           : overview.split(",")
//         : [],

//       gallery : req.file ? `/uploads/${req.file.filename}` : "",
//       clientName,
//       budget,
//       location,
//       sector,
//       completedAt
//     });

//     res.status(201).json({
//       success: true,
//       data
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

const createPortfolio = async (req, res) => {
  try {
    const body = parseJSON(req.body);
    const {
      title,
      // slug,
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


// GET ALL
const getAllPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// GET SINGLE (portfolio details page)
const getPortfolioById= async (req, res) => {
  try {
    const data = await Portfolio.findById(req.params.id);
    
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// UPDATE
// exports.updatePortfolio = async (req, res) => {
//   try {
//     const data = await Portfolio.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json({ success: true, data });
//   } catch (error) {
//     res.status(500).json({ success: false });
//   }
// };
const updatePortfolio = async (req, res) => {
  try {
    const body = JSON.parse(JSON.stringify(req.body));

    const gallery = req.files
      ? req.files.map((f) => `/uploads/${f.filename}`)
      : [];

    const updatedData = {
      ...body,
      overview: body.overview ? body.overview.split(",") : [],
      ...(gallery.length && { gallery }),
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
// DELETE
exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
module.exports = {
  createPortfolio,getAllPortfolios,getPortfolioById,updatePortfolio
};
