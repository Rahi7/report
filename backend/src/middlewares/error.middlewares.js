import { ApiError } from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {
    const isCustomError = err instanceof ApiError;

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error(`[${isCustomError ? 'API' : 'Server'} Error]: ${message}`);

    return res.status(statusCode).json({
        success: false,
        message,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};

export default errorMiddleware;

/*
The ApiError class creates custom, structured errors.
The errorMiddleware catches all errors in the app, checks if it's a custom ApiError, and sends a clean JSON response with status, message, and optional stack trace (in dev mode only).
This helps both frontend and backend handle errors in a consistent and debuggable way.

*/