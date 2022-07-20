const express = require('express');
const router = express.Router();

const v7Routes = require('./routes/v7');
const v8Routes = require('./routes/v8');
const v9Routes = require('./routes/v9');
const v10Routes = require('./routes/v10');
const v11Routes = require('./routes/v11');
const v12Routes = require('./routes/v12');

router.use('/', v7Routes);
router.use('/', v8Routes);
router.use('/', v9Routes);
router.use('/', v10Routes);
router.use('/', v11Routes);
router.use('/', v12Routes);

module.exports = router;
