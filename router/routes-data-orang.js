const express = require("express");
const router = express.Router();
const data = require("../controller/router-data-orang");

// router
router.get("/", data.getDataOrang);

module.exports = router