const express = require('express');

const router = express.Router();
const git = require('git-rev');

const getHash = () => new Promise(resolve => git.long(sha => resolve(sha)));

router.get('/api/example', async (req, res) => {
  const hash = await getHash();
  res.json({ sha: hash });
});

module.exports = router;
