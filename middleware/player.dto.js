const { check, validationResult } = require("express-validator");

const playerdto = [
  check("full_name")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Full name is required")
    .matches(/^[\w\s]+$/)
    .withMessage("Full name can only contain letters, numbers, and spaces"),
  check("age").isNumeric().withMessage("Age must be a number"),
  check("nationality")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Nationality is required"),
  check("position")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Position is required"),
  check("height")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Height is required"),
  check("weight")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Weight is required"),
  check("foot")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Foot is required"),
  check("current_club")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("current_club is required"),
  check("current_salary")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("current_salary is required"),
  check("picture_link")
    .trim()
    .escape()
    .isURL()
    .withMessage("Please provide a valid URL for the picture link"),
];

module.exports = playerdto;
