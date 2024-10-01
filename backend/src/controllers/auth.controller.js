import { MyError } from "../utils/error.handler.js";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const signUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(req.body);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);
        res.status(201).json({
            status: "success",
            message: "Sign up successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const signIn = async (req, res) => {};

export const signOut = async (req, res) => {};
