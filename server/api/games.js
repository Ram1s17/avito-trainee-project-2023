const { FREE_TO_PLAY_GAMES_API_BASE_URL, FREE_TO_PLAY_GAMES_LIMIT } = require("./constants");
const { paginate, processQueryParametrs } = require("./utils");

const getAllGames = async (query) => {
    try {
        const page = Number(query.page);
        const processedQueryParametrs = processQueryParametrs(query);
        const response = await fetch(`${FREE_TO_PLAY_GAMES_API_BASE_URL}/filter?${processedQueryParametrs}`);
        const gamesList = await response.json();
        return {
            totalGamesCount: gamesList.length,
            currentGamesList: paginate(gamesList, page, FREE_TO_PLAY_GAMES_LIMIT)
        };
    } catch (e) {
        throw e;
    }
};

module.exports = { getAllGames };