import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import type { Express } from 'express';

const app: Express = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
import pageRouter from "./routes/page.route.js";

app.use("/", pageRouter);

export default app;