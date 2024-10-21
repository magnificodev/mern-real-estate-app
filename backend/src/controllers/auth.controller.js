import { MyError } from "../utils/error.handler.js";
import bcryptjs from "bcryptjs";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({
            status: "success",
            message: "Sign up successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        const isPasswordMatched = await bcryptjs.compare(
            password,
            user.password
        );

        if (!isPasswordMatched) {
            throw new MyError(400, "Password is incorrect, please try again");
        }

        const accessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_ACCESS_TOKEN_KEY,
            {
                expiresIn: "1d",
            }
        );
        const refreshToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_REFRESH_TOKEN_KEY,
            {
                expiresIn: "7d",
            }
        );

        const { password: _, ...rest } = user;

        res.status(200)
            .cookie("accessToken", accessToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            })
            .cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .json({
                status: "success",
                message: "Sign in successfully",
                data: {
                    user: rest,
                },
            });
    } catch (err) {
        next(err);
    }
};

export const signOut = async (req, res, next) => {};
