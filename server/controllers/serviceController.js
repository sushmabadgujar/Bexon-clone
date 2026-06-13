const Service = require("../models/Services");
const generateSlug = require("../utils/generateSlug");
const parseJSON = require("../utils/parseJSON");
const fs = require("fs");
const path = require("path");

// CREATE SERVICE
const createService = async (req, res) => {
  try {
    const body = parseJSON(req.body);
    const {
      title,
      shortDescription,
      longDescription,
      icon,
      category,
      isFeatured,
      status,
      features
    } = body;
    const slug = generateSlug(title);
    const service = await Service.create({
      title,
      shortDescription,
      longDescription,
      icon,
      category,
      isFeatured,
      status,
      image: req.file ? `/uploads/${req.file.filename}` : "",
      slug,
      features
    });

    res.status(201).json({
      success: true,
      data: service,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL SERVICES
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      success: true,
      data: services
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET SINGLE SERVICE
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found"
      });
    }

    res.status(200).json({
      success: true,
      data: service
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const updateService = async (req, res) => {
  try {
    const updatedData = parseJSON(req.body);

    const existingService = await Service.findById(req.params.id);
    console.log(existingService);
    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (updatedData.title) {
      updatedData.slug = generateSlug(updatedData.title);
    }

    if (req.file) {
      if (existingService.image) {
        console.log("existing image",existingService.image);
        const oldImagePath = path.join(
          __dirname,
          "..",
          existingService.image
        );

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      updatedData.image = `/uploads/${req.file.filename}`;
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  }

// DELETE SERVICE
const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
        if (!service) {
          return res.status(404).json({
            success: false,
            message: "service not found",
          });
        }
    
        // Delete image from uploads folder
        if (service.image) {
          const imagePath = path.join(
            __dirname,
            "..",
            service.image.replace(/^\/+/, "")
          );
    
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        }
    
    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
};