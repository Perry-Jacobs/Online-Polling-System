import type { Request, Response } from "express";
import { HomePage } from "../views/home.js";

const index = async (req: Request, res: Response) => {
	res.status(200).send(HomePage());
};

export {
	index,
}