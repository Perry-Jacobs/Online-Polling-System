import jwt from 'jsonwebtoken'
import type { Request, Response} from 'express';

type AuthError = {
	email: string;
	password: string;
}

type PotentialError = {
	message: string
}


const handleErrors = (err: PotentialError) => {
	let errors: AuthError = { email: "", password: "" }

	if (err.message === "incorrect email") {
		errors.email =  "user is not registers";
	}

	if (err.message === "incorrect password") {
		errors.password = "incorrect password";
	}

	// we need to add email already exists
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id: string) => {
	return jwt.sign({ id }, "", { expiresIn: maxAge })
}

export const signup_user = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	
	try {
		let user: { id: string } = { id: "" }
		// login the user
		const token = createToken(user.id)
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		if (req.get("HX-Request") === "true") {
			res.status(200).send('<p class="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">Account created successfully.</p>');
			return;
		}
		res.status(200).json({ user })
		
	} catch (error) {
		// const errors = handleErrors(error)
		res.status(400).json({  })
	
	}
}

export const login_user = async (req: Request<{}, unknown, { email: string, password: string }>, res: Response) => {
	const { email, password } = req.body;

	try {
		let user: { id: string } = { id: "" }
		// login the user
		const token = createToken(user.id)
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json({ user })
		
	} catch (error) {
		// const errors = handleErrors(error)
		res.status(400).json({  })

	}
}

export const logout_get = (req: Request, res: Response) => {
	res.cookie("jwt", '', { maxAge: 1 });
	res.redirect('/');
}

export const create_poll = (req: Request, res: Response) => {
	const message = '<p class="rounded border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700">Poll publishing is ready for the database model and will be enabled once poll storage is configured.</p>';
	if (req.get("HX-Request") === "true") {
		res.status(501).send(message);
		return;
	}
	res.status(501).json({ message: "Poll storage is not configured" });
};

export const forgot_password = (req: Request, res: Response) => {
	const message = '<p class="rounded border border-indigo-200 bg-indigo-50 px-4 py-3 text-indigo-700">If that email exists, reset instructions will be sent shortly.</p>';
	if (req.get("HX-Request") === "true") {
		res.status(200).send(message);
		return;
	}
	res.status(200).json({ message: "Reset instructions requested" });
};