import { Router } from "express";
import { index } from "../controllers/page.controllers.js";

const router = Router();

router.route("/").get(index);

export default router;