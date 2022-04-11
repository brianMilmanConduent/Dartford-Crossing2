const express = require('express');
const router = express.Router();

const v1Routes = require('./routes/v1');

router.use('/', v1Routes);

module.exports = router;
