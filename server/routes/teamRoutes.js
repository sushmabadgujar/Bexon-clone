const express = require("express");

const {
  createTeam,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam
} = require("../controllers/teamController");

const router = express.Router();
const upload = require("../middleware/upload");

// http://localhost:5000/api/team/create-team
router.post("/create-team", upload.single("image"),createTeam);

router.get("/", getAllTeams);

router.get("/:id", getSingleTeam);

router.put("/:id", upload.single("image"), updateTeam);

router.delete("/:id", deleteTeam);

module.exports = router;