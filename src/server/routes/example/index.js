import express from 'express';

const router = express.Router();

router.get('/api/example', async (req, res) => {
  res.json({ version: 1 });
});

module.exports = router;
