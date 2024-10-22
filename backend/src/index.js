import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import postRoute from "./routes/post.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

// Error handling middlewares
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "failure";
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        status,
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
