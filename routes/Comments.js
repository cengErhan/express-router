const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ data: 'Here is your comments' });
    }
);

router.post('/', (req, res) => {
    res.send({ data: 'comment created' });
    }
);

module.exports = router;

