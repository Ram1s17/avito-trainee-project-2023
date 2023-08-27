const { getAllGames } = require("../api/games");

class GamesController {
    async getAllGames(req, res, next) {
        try {
            const gamesData = await getAllGames(req.query);
            res.json(gamesData);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = new GamesController();