const { getAllGames, getGame } = require("../api/games");

class GamesController {
    async getAllGames(req, res, next) {
        try {
            const gamesData = await getAllGames(req.query);
            res.json(gamesData);
        } catch (e) {
            next(e);
        }
    }

    async getGame(req, res, next) {
        try {
            const id = req.params.id;
            const gameData = await getGame(id);
            res.json(gameData);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = new GamesController();