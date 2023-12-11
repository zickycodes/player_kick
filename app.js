const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/database");
const app = express();
const Info = require("./database/models/News");
const Player = require("./database/models/Player");
const User = require("./database/models/User");
const authRoute = require("./routes/auth.route");
const authController = require("./routes/admin.route");
require("dotenv").config();

app.use(bodyParser.json());

app.use("/api/users", authRoute);
// app.use("/api", authController);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Relationships
User.hasMany(Info);
Info.belongsTo(User);

sequelize
  .authenticate()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("I'm fucking ready for connections");
    });
    console.log("connected to the db");
  })
  .catch((err) => {
    console.log(err);
  });

// { alter: true }
sequelize
  .sync()
  .then(() => {
    console.log("Pushed");
  })
  .catch((err) => console.log(err));
