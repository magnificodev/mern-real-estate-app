import { MyError } from "./error.handler.js";
import { validationResult } from "express-validator";

export const validationChecker = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new MyError(400, errors.errors[0].msg));
    }
    next();
};
