const express = require('express');
const router = express.Router();

const v7Routes = require('./routes/v7');

router.use('/', v7Routes);

module.exports = router;
