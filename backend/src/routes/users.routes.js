import express from "express";
const router = express.Router();

import {updateUser} from "../controllers/users.controller.js";

router.patch("/")

export default router;