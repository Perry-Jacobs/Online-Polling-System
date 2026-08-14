import express from 'express';
import type { Request, Response, Express } from 'express';
const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
