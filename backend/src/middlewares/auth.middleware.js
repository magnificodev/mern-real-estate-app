import jwt from "jsonwebtoken";
import { MyError } from "../utils/error";

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies["accessToken"];
        if (!token) return next(new MyError(401, "Unauthorized"));

        jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (err, decoded) => {
            if (err) {
                res.clearCookie("accessToken");
                if (err.name === "TokenExpiredError") {
                    return next(new MyError(401, "Access token expired"));
                }
                return next(new MyError(401, "Invalid access token"));
            }
            req.userId = decoded.userId;
            next();
        });
    } catch (err) {
        next(err);
    }
};

export default verifyToken;
