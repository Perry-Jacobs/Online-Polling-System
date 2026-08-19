import { Router } from "express";
import { audit_logs_get, create_poll_get, forgot_password_get, home_content_get, index, login_get, manage_users_get, polls_get, results_get, security_settings_get, signup_page_get, voters_get } from "../controllers/page.controller.js";

const pageRouter = Router();

pageRouter.route("/").get(index);
pageRouter.route("/home").get(home_content_get);
pageRouter.route("/polls").get(polls_get);
pageRouter.route("/create-poll").get(create_poll_get);
pageRouter.route("/results").get(results_get);
pageRouter.route("/voters").get(voters_get);
pageRouter.route("/admin/users").get(manage_users_get);
pageRouter.route("/admin/security").get(security_settings_get);
pageRouter.route("/admin/audit-logs").get(audit_logs_get);
pageRouter.route("/login").get(login_get);
pageRouter.route("/signup").get(signup_page_get);
pageRouter.route("/forgot-password").get(forgot_password_get);

export default pageRouter;