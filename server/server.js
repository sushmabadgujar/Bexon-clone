require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");

const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
console.log(process.env.CLIENT_URL);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// ============ Auth Routes ===============
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ============ Service Routes ===============
const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

// ============ Portfolio Routes ===============
const portfolioRoutes = require("./routes/portfolioRoutes");
app.use("/api/portfolios", portfolioRoutes);

// ============ Blog Routes ===============
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);

// ============ team Routes ===============
const teamRoutes = require("./routes/teamRoutes");
app.use("/api/team", teamRoutes);
// ============ Database Connection ================
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server start error:", error.message);
  }
};
startServer();
module.exports = app;