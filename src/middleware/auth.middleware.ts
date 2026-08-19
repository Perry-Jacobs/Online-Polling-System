import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import type { JwtPayload, VerifyOptions  } from "jsonwebtoken";

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
	const token = req.cookies.jwt;

	// if (token) {
	// 	jwt.verify(token, "", (err: VerifyOptions, decodedToken: string | JwtPayload | undefined) => {

	// 	})
	// }

}