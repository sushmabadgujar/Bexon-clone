const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendResponse = require("../utils/sendResponse");

// =========================
// REGISTER CONTROLLER
// =========================

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return sendResponse(res, 400, false, "All required fields are missing");
    }

    // Check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return sendResponse(res, 409, false, "Email already registered");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "user"
    });

    return sendResponse(res, 201, true, "User registered successfully", {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    });

  } catch (error) {
    return sendResponse(res, 500, false, "Internal server error");
  }
};

// // =========================
// // LOGIN CONTROLLER
// // =========================
const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    // SEND COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000 
    });

    // IMPORTANT DEBUG
    console.log("COOKIE SENT");

    return res.status(200).send({
      success: true,
      token,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getProfile = async (req, res) => {

  try {
     const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({
      success: true,
      message: "Welcome Admin Dashboard",
      user : user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

};



// ====================  Update Profile ====================
const updateProfile = async (req, res) => {
  // try {
  //   const userId = req.user.id;

  //   const emailExists = await User.findOne({
  //     email: req.body.email,
  //     _id: { $ne: userId },
  //   });

  //   if (emailExists) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "Email already exists",
  //     });
  //   }

  //   const updateData = { ...req.body };
    
  //   if (req.file) {
  //     updateData.profilePic = `/uploads/${req.file.filename}`;
  //   }

  //   const user = await User.findByIdAndUpdate(userId, updateData, {
  //     new: true,
  //     runValidators: true,
  //   }).select("-password");

  //   res.json({
  //     success: true,
  //     message: "Profile updated",
  //     user,
  //   });
  // } catch (err) {
  //    console.log("UPDATE PROFILE ERROR =>", err);
  //   res.status(500).json({
  //     success: false,
  //     message: err.message,
  //   });
  // }
  try {
    const userId = req.user.id;

    const emailExists = await User.findOne({
        email: req.body.email,
        _id: { $ne: userId },
    });

    if (emailExists) {
        return res.status(400).json({
            success: false,
            message: "Email already exists",
        });
    }

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.bio = req.body.bio;

    if (req.file) {
        user.profilePic = `/uploads/${req.file.filename}`;
    }

    await user.save(); // 🔥 FULL VALIDATION TRIGGERS

    res.json({
        success: true,
        message: "Profile updated",
        user,
    });

} catch (err) {
    console.log("UPDATE PROFILE ERROR =>", err);

    res.status(400).json({
        success: false,
        message: err.message,
    });
}
};
module.exports = {
  register,
  login,getProfile,updateProfile 
};