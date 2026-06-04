const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {

    // Get token from cookie
    // const token = req.cookies.token;

    // if (!token) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Unauthorized - No token"
    //   });
    // }

    // // Verify token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // req.user = decoded;
    // console.log(req.user);

    req.user = {
    id: "6a13faa89ff26bcc1f668347",
    role: "admin",
    email: "sushma@test.com",
  };

 
        next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;