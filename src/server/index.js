import express from 'express';
import path from 'path';
import example from './routes/example';

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../dist')));

// Routes
app.use(example);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on ${port}`);
