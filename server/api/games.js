const { FREE_TO_PLAY_GAMES_API_PREFIX } = require("./constants");

const getAllGames = async () => {
    let response = await fetch(FREE_TO_PLAY_GAMES_API_PREFIX);
    let gamesList = await response.json();
    return gamesList;
};

module.exports = { getAllGames };