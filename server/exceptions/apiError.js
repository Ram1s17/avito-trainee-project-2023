module.exports = class ApiError extends Error {
    status;

    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static ObjectNotFoundError() {
        return new ApiError(404, "Object not found: game or endpoint not found");
    }

    static UnexpectedAPIerror() {
        return new ApiError(500, "Unexpected API error");
    }
};