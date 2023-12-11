const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { body } = require("express-validator");
const userdto = require("../middleware/user.dto");

const authController = require("../controller/auth.controller");

router.post("/signup-check", userdto, authController.signup);

router.post("/login", userdto, authController.login);

module.exports = router;
