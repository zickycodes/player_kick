const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.get("Authorization");
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    e.stausCode = 500;
  }

  if (!decodedToken) {
    const error = new Error("Not Authenticated");
    error.stausCode = 401;
    return next(error);
  }

  if (decodedToken.role !== "admin") {
    const error = new Error("You are not an admin user");
    error.stausCode = 401;
    return next(error);
  }

  req.user = decodedToken;
  next();
};
