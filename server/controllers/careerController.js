
const Career = require("../models/Career");
const fs = require("fs");
const path = require("path");
const createCareer = async (req, res) => {
  try {
    const body = req.body;

    const career = await Career.create({
      ...body,
      requirements: body.requirements
        ? body.requirements.split(",")
        : [],
      responsibilities: body.responsibilities
        ? body.responsibilities.split(",")
        : [],
      tags: body.tags
        ? body.tags.split(",")
        : [],
      featuredImage: req.file
        ? `/uploads/${req.file.filename}`
        : "",
    });

    res.status(201).json({
      success: true,
      career,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCareers = async (req, res) => {
  const careers = await Career.find().sort({
    createdAt: -1,
  });

  res.json({
    success: true,
    count: careers.length,
    careers,
  });
};

const getCareerById = async (req, res) => {
  const career = await Career.findById(req.params.id);

  res.json({
    success: true,
    career,
  });
};

const updateCareer = async (req, res) => {
  try {
    const body = req.body;

    const updateData = {
      ...body,
      requirements: body.requirements
        ? body.requirements.split(",")
        : [],
      responsibilities: body.responsibilities
        ? body.responsibilities.split(",")
        : [],
      tags: body.tags
        ? body.tags.split(",")
        : [],
    };


    // Existing career fetch
    const existingCareer = await Career.findById(req.params.id);

    if (!existingCareer) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    //  New image uploaded
    if (req.file) {
      // Delete old image
      if (existingCareer.featuredImage) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          existingCareer.featuredImage
        );

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save new image path
      updateData.featuredImage = `/uploads/${req.file.filename}`;
    }
    const career = await Career.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      career,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCareer = async (req, res) => {
  const body = req.body;

  // Existing career fetch
  const existingCareer = await Career.findById(req.params.id);

  if (!existingCareer) {
    return res.status(404).json({
      success: false,
      message: "Team not found",
    });
  }

  if (existingCareer.featuredImage) {
    const oldImagePath = path.join(
      __dirname,
      "..",
      existingCareer.featuredImage
    );

    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
  }
  await Career.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Career deleted successfully",
  });
};

module.exports = {
  createCareer, updateCareer, getCareerById, getCareers, deleteCareer
};