const ApiError = require("../exceptions/apiError")

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

const checkAPIstatus = (status) => {
    if (status === 200) {
        return;   
    }
    if (status === 404) {
        throw ApiError.ObjectNotFoundError();
    }
    if (status === 500) {
        throw ApiError.UnexpectedAPIerror();
    }
}

module.exports = { processQueryParametrs, paginate, checkAPIstatus };