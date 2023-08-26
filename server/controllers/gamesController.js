const { getAllGames } = require("../api/games");

class GamesController {
    async getAllGames(req, res, next) {
        try {
            const games = await getAllGames();
            res.json(games);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = new GamesController();