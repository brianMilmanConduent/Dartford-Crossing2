const express = require('express');
const router = express.Router();

const v7Routes = require('./routes/v7');
const v8Routes = require('./routes/v8');
const v9Routes = require('./routes/v9');
const v10Routes = require('./routes/v10');
const v11Routes = require('./routes/v11');
const v12Routes = require('./routes/v12');
const v13Routes = require('./routes/v13');
const v14Routes = require('./routes/v14');
const v15Routes = require('./routes/v15');
const v16Routes = require('./routes/v16');
const v17Routes = require('./routes/v17');
const v18Routes = require('./routes/v18');
const v19Routes = require('./routes/v19');
const v20Routes = require('./routes/v20');

router.use('/', v7Routes);
router.use('/', v8Routes);
router.use('/', v9Routes);
router.use('/', v10Routes);
router.use('/', v11Routes);
router.use('/', v12Routes);
router.use('/', v13Routes);
router.use('/', v14Routes);
router.use('/', v15Routes);
router.use('/', v16Routes);
router.use('/', v17Routes);
router.use('/', v18Routes);
router.use('/', v19Routes);
router.use('/', v20Routes);

module.exports = router;
