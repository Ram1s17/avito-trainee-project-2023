require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

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
