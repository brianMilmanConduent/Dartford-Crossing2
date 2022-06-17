const express = require('express');
const router = express.Router();

const v7Routes = require('./routes/v7');
const v8Routes = require('./routes/v8');
const v9Routes = require('./routes/v9');

router.use('/', v7Routes);
router.use('/', v8Routes);
router.use('/', v9Routes);

module.exports = router;
