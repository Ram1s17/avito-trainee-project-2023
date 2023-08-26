require("dotenv").config();
const express = require("express");
const { API_PREFIX } = require("./constants");
const gamesRouter = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(API_PREFIX, gamesRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
};

start();
