const processQueryParametrs = (query) => {
    delete query.page;
    return (Object.entries(query).map(value => {
        return value.join('=');
    }).join('&'));
};

const paginate = (arr, page = 1, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return arr.slice(startIndex, endIndex);
};

module.exports = { processQueryParametrs, paginate };