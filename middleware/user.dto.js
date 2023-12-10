const { check, validationResult } = require("express-validator");
const { body } = require("express-validator");

(userdto = [
  check("full_name")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Full name is required")
    .matches(/^[\w\s]+$/)
    .withMessage("Full name can only contain letters, numbers, and spaces"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please enter a valid email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("username")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Username is required"),
]),
  (module.exports = userdto);
