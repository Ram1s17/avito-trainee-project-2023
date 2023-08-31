export const genres = [
    'all', 'mmorpg', 'shooter', 'strategy', 'moba', 'racing',
    'sports', 'social', 'sandbox', 'open-world', 'survival',
    'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based',
    'first-person', 'third-Person', 'top-down', 'tank',
    'space', 'sailing', 'side-scroller', 'superhero',
    'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps',
    'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi',
    'fighting', 'action-rpg', 'action', 'military',
    'martial-arts', 'flight', 'low-spec', 'tower-defense',
    'horror', 'mmorts'
].map(genre => ({ label: genre, value: genre }));

export const platforms = [
    'all',
    'pc',
    'browser'
].map(platform => ({ label: platform, value: platform }));

export const sortOptions = [
    'release-date',
    'popularity',
    'alphabetical',
    'relevance'
].map(sortOption => ({ label: sortOption, value: sortOption }));

export const messageByStatus = {
    404: "The page you visited does not exist.",
    500: "Something went wrong."
}

export const convertDate = (date) => {
    return date.split("-").reverse().join(".");
};