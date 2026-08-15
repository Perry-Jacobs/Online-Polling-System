import dotenv from "dotenv";
import app from "./server.js";
import connectDB from "./config/database.js";

dotenv.config({
	path: "./.env"
});

const startServer = async () => {
	try {
		await connectDB();

		app.listen(process.env.PORT || 3000, () => {
			console.log(`Server is running on port: ${process.env.PORT}`);
		});
	} catch (error) {
		console.log("Error Connection", error);
	}
};

startServer();