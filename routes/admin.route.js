const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const playerdto = require("../middleware/player.dto");
const isadmin = require("../guards/is-admin");

const admincontroller = require("../controller/admin.controller");
const isAdmin = require("../guards/is-admin");

router.post("/addplayer", isAdmin, playerdto, admincontroller.addPlayer);
router.put(
  "/updateplayer/:id",
  isAdmin,
  playerdto,
  admincontroller.updatePlayer
);
router.get("/getplayer/:id", isAdmin, admincontroller.getPlayer);
router.get("/getallplayers", admincontroller.getPlayer);

router.post("/addnews", isAdmin, playerdto, admincontroller.addPlayer);
router.put("/updatenews/:id", isAdmin, playerdto, admincontroller.updatePlayer);
router.get("/addnews/:id", isAdmin, admincontroller.getPlayer);
router.get("/getnews", isAdmin, admincontroller.getPlayer);

module.exports = router;
