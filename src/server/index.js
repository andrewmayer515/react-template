import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import example from './routes/example';

dotenv.config();
const app = express();

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

app.use(bodyParser.json());

// Routes
app.use(example);

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on ${port}`);
