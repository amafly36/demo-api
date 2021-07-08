const express = require("express");
const app = express();
const cors = require("cors");
const countriesData = require("./countriesData.json");

const port = 3000;

app.use(cors());

app.get("/all", (req, res) => {
    res.json({
        status: "success",
        data: coutriesData,
    });
});

app.get("/:countryName", (req, res) => {
    const countryName = req.params.countryName.toLowerCase();

    const countryData = countriesData.filter(
        (country) => country.name.toLowerCase() === countryName
    );

    res.json({
        status: "success",
        data: countryData,
    });
});



app.listen((port, err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});