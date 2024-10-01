import express from "express";
const router = express.Router();

import { signUpValidator } from "../validators/auth.validator.js";
import { signUp, signIn, signOut } from "../controllers/auth.controller.js";
import { validationChecker } from "../utils/validation.checker.js";

router.post("/signup", signUpValidator, validationChecker, signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);

export default router;
