import express from "express";
const router = express.Router();

import {
    signUpValidator,
    signInValidator,
} from "../validators/auth.validator.js";
import {
    signUp,
    signIn,
    googleAuth,
    signOut,
} from "../controllers/auth.controller.js";
import { validationChecker } from "../utils/validation.checker.js";

router.post("/signup", signUpValidator, validationChecker, signUp);
router.post("/signin", signInValidator, validationChecker, signIn);
router.post("/google-auth", googleAuth);
router.post("/signout", signOut);

export default router;
