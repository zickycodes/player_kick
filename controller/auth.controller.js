const User = require("../database/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
require("dotenv").config();

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errA = errors.array();
    const errMe = errA[0].msg;
    const error = new Error(errMe);
    error.statusCode = 422;
    // error.data = errors.array();
    return next(error);
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = User.findOne({
      where: {
        id: req.body.email,
      },
    });
    if (user) {
      const error = new Error("");
    }
    const result = await User.create({
      full_name: req.body.full_name,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
    });
    // await Author.destroy({ truncate: true });
    res.status(201).json({ message: "User created!", userId: result.id });
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findAll({
      where: {
        email: email,
      },
    });

    if (user.length === 0) {
      const error = new Error("No user with that email is found");
      error.statusCode = 401;
      return next(error);
    }
    const confirmedPassword = await bcrypt.compare(
      password,
      user[0].dataValues.password
    );

    if (!confirmedPassword) {
      const error = new Error("Password is incorrect");
      error.statusCode = 401;
      return next(error);
    } else {
      const token = jwt.sign(
        {
          email: user[0].dataValues.email,
          userId: user[0].dataValues.id,
          role: user[0].dataValues.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        userId: user[0].dataValues.id,
        role: user[0].dataValues.role,
      });
    }
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};

module.exports = {
  signup,
  login,
};
