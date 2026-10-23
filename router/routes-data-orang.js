const express = require("express");
const router = express.Router();
const data = require("../controller/router-data-orang");

// router
router.get("/", data.getDataorang);
router.get("/:id", data.getdataById);


module.exports = router