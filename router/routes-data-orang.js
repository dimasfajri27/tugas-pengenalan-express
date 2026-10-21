const express = require("express");
const router = express.Router();
const data = require("../controller/router-data-orang");

// router
router.get("/data-orang", data.getDataorang);

module.exports = router