const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const playerdto = require("../middleware/player.dto");
const isadmin = require("../guards/is-admin");

const admincontroller = require("../controller/admin.controller");
const isAdmin = require("../guards/is-admin");

router.post("/addplayer", isAdmin, playerdto, admincontroller.addPlayer);
router.put("/updateplayer/:id", playerdto, admincontroller.updatePlayer);
router.get("/getplayer/:id", admincontroller.getPlayer);
router.get("/getallplayers", admincontroller.getPlayer);

router.post("/addnews", playerdto, admincontroller.addPlayer);
router.put("/updatenews/:id", playerdto, admincontroller.updatePlayer);
router.get("/addnews/:id", admincontroller.getPlayer);
router.get("/getnews", admincontroller.getPlayer);

module.exports = router;
