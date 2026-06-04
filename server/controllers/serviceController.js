const Service = require("../models/Services");
const generateSlug = require("../utils/generateSlug");

// CREATE SERVICE
const createService = async (req, res) => {
  try {
    const { title, shortDescription, longDescription, image, icon, features, category } = req.body;

    const slug = generateSlug(title);

    const service = await Service.create({
      title,
      slug, 
      shortDescription,
      longDescription,
      image,
      icon,
      features,
      category
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
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

// UPDATE SERVICE
const updateService = async (req, res) => {
  try {
    const updatedData = req.body;

    if (updatedData.title) {
      updatedData.slug = generateSlug(updatedData.title);
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: service
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE SERVICE
const deleteService = async (req, res) => {
  try {
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