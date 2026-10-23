const express = require("express");
const router = express.Router();
const hitung = require("../controller/routercontroller");



// bagian routing nya
router.get("/", hitung.getRumus)
router.get("/:number/:number", hitung.getHitungByNumber);






module.exports = router;