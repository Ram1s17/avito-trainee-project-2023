const express = require("express");
const gamesController = require("../controllers/gamesController");
const { BACKEND_ROUTES } = require("../constants");

const gamesRouter = new express.Router();

gamesRouter.get(BACKEND_ROUTES.GAMES, gamesController.getAllGames);

module.exports = gamesRouter;