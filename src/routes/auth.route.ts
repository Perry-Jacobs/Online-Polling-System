import { Router } from "express";
import { create_poll, forgot_password, login_user, logout_get, signup_user } from "../controllers/auth.controller.js";

 export const apiRouter = Router();

 apiRouter.post("/login", login_user);
 apiRouter.post("/signup", signup_user);
 apiRouter.post("/polls", create_poll);
 apiRouter.post("/forgot-password", forgot_password);
 apiRouter.get("/logout", logout_get);