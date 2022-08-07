const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ data: 'Here is your data' });
});

router.post('/', (req, res) => {
  res.send({ data: 'user created' });
});

module.exports = router;

