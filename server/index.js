require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { API_PREFIX } = require("./constants");
const gamesRouter = require("./routes/routes");
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:3001"
}));
app.use(API_PREFIX, gamesRouter);
app.use(errorMiddleware);
app.use(express.json());

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
