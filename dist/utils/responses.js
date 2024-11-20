"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = (data, res, statusCode = 200) => {
    res.status(statusCode).json({ data });
};
exports.error = (data, error, res, statusCode = 500) => {
    res.status(statusCode).json({ data, error: Error.toString() });
};
exports.noContentSuccess = (res) => {
    res.status(204).send();
};
exports.notFound = (data, res) => {
    res.status(404).json({ data });
};
