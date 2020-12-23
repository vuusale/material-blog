const ErrorResponse = require('../utils/ErrorResponse');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    if (err.code === 'ER_DUP_ENTRY') {
        const splitted = err.sqlMessage.split("'");
        error = new ErrorResponse(`${capitalize(splitted[3].split(".")[1])} ${splitted[1]} already exists`, 409);
    }

    if (err.code === 'ER_BAD_NULL_ERROR') {
        const column = err.sqlMessage.split("'")[1];
        error = new ErrorResponse(`Column ${column} cannot be null`, 400)
    }

    if (err.code === 'ER_DATA_TOO_LONG') {
        const column = err.sqlMessage.split("'")[1];
        error = new ErrorResponse(`Length limit for column ${column} has been exceeded`, 400);
    }

    return res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Internal Server Error'
    });
}

module.exports = errorHandler;