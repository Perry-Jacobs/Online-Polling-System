import type { Request, Response } from "express";
import { HomeContent, HomePage } from "../views/home.js";
import { LoginDocument, LoginPage } from "../views/login.js";
import { SignupDocument, SignupPage } from "../views/signup.js";
import { PollsDocument, PollsPage } from "../views/polls.js";
import { CreatePollDocument, CreatePollPage } from "../views/create-poll.js";
import { ResultsDocument, ResultsPage } from "../views/results.js";
import { VotersDocument, VotersPage } from "../views/voters.js";
import { ManageUsersDocument, ManageUsersPage } from "../views/manage-users.js";
import { SecuritySettingsDocument, SecuritySettingsPage } from "../views/security-settings.js";
import { AuditLogsDocument, AuditLogsPage } from "../views/audit-logs.js";
import { ForgotPasswordDocument, ForgotPasswordPage } from "../views/forgot-password.js";

export const index = async (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? HomeContent() : HomePage());
};

export const home_content_get = (req: Request, res: Response) => {
	res.status(200).send(HomeContent());
};

export const polls_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? PollsPage() : PollsDocument());
};

export const create_poll_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? CreatePollPage() : CreatePollDocument());
};

export const results_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? ResultsPage() : ResultsDocument());
};

export const voters_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? VotersPage() : VotersDocument());
};

export const manage_users_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? ManageUsersPage() : ManageUsersDocument());
};

export const security_settings_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? SecuritySettingsPage() : SecuritySettingsDocument());
};

export const audit_logs_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? AuditLogsPage() : AuditLogsDocument());
};

export const forgot_password_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? ForgotPasswordPage() : ForgotPasswordDocument());
};

export const signup_get = (req: Request, res: Response) => {}
export const signup_page_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? SignupPage() : SignupDocument());
};
export const login_get = (req: Request, res: Response) => {
	const isHtmxRequest = req.get("HX-Request") === "true";
	res.status(200).send(isHtmxRequest ? LoginPage() : LoginDocument());
}