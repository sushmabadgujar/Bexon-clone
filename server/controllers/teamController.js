const Team = require("../models/Team");
const parseJSON = require("../utils/parseJSON");
const fs = require("fs");
const path = require("path");

// ========================
// Create Team [post][http://localhost:5000/api/team]
// ========================
const createTeam = async (req, res) => {
  try {
    const body = parseJSON(req.body);

    if (!body.name || !body.designation) {
      return res.status(400).json({
        success: false,
        message: "Name and Designation are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const team = await Team.create({
      ...body,
      image: `/uploads/${req.file.filename}`,
    });

    return res.status(201).json({
      success: true,
      message: "Team member created",
      data: team,
    });
  } catch (error) {
    console.log("CREATE TEAM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
//  GET ALL TEAM MEMBERS [get][http://localhost:5000/api/team]
// =======================
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: teams.length,
      data: teams
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// =======================
// GET SINGLE TEAM MEMBER [get][http://localhost:5000/api/team/6a1fc3fdc964db5c6c74465e]
// =======================

const getSingleTeam = async (req, res) => {
  try {
    console.log("🔥 HIT CONTROLLER");
    console.log("PARAM ID:", req.params.id);
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
//  UPDATE TEAM MEMBER [put][http://localhost:5000/api/team/team-id]
// =======================

const updateTeam = async (req, res) => {
  try {
    const body = parseJSON(req.body);

    // Existing team fetch
    const existingTeam = await Team.findById(req.params.id);

    if (!existingTeam) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    //  New image uploaded
    if (req.file) {
      // Delete old image
      if (existingTeam.image) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          existingTeam.image
        );

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save new image path
      body.image = `/uploads/${req.file.filename}`;
    }

    const team = await Team.findByIdAndUpdate(
      req.params.id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Team updated successfully",
      data: team,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =======================
//  DELET TEAM MEMBER [delete][http://localhost:5000/api/team/team-id]
// =======================

const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    // Delete image from uploads folder
    if (team.image) {
      const imagePath = path.join(
        __dirname,
        "..",
        team.image.replace(/^\/+/, "")
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    await Team.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Team member deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam
};