import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import example from './routes/example';

dotenv.config();
const app = express();

// Serve static files from the React app
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Routes
app.use(example);

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on ${port}`);
