const { FREE_TO_PLAY_GAMES_API_BASE_URL, FREE_TO_PLAY_GAMES_LIMIT } = require("./constants");
const { paginate, processQueryParametrs, checkAPIstatus } = require("./utils");

const getAllGames = async (query) => {
    try {
        const page = query.page ? Number(query.page) : 1;
        const processedQueryParametrs = processQueryParametrs(query);
        const response = await fetch(`${FREE_TO_PLAY_GAMES_API_BASE_URL}/games?${processedQueryParametrs}`);
        checkAPIstatus(response.status);
        const gamesList = await response.json();
        return {
            totalGamesCount: gamesList.length,
            currentGamesList: paginate(gamesList, page, FREE_TO_PLAY_GAMES_LIMIT)
        };
    } catch (e) {
        throw e;
    }
};

const getGame = async (gameID) => {
    try {
        const response = await fetch(`${FREE_TO_PLAY_GAMES_API_BASE_URL}/game?id=${gameID}`);
        checkAPIstatus(response.status);
        const gameData = await response.json();
        return gameData;
    } catch (e) {
        throw e;
    }
};

module.exports = { getAllGames, getGame };