const router = require('express').Router();

const apiRoutes = require('./api');
const templateRoutes = require('./templateRoutes');

router.use('/', templateRoutes);
router.use('/api', apiRoutes);

module.exports = router;
