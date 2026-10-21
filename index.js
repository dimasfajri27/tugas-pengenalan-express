const express = require("express");
const app = express();
const bangunDatar = require("./router/routes-bagun-datar");
const pendataan = require("./router/routes-data-orang");

app.use(express.json());
app.use("/lingkaran-tabung", bangunDatar);
app.use("/", pendataan)

const port = 3000;

// menjalankan server express
app.listen(port, () => {
    console.log("ini link server nya http://localhost:" + port);
});