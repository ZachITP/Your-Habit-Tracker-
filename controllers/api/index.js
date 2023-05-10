const router = require('express').Router();
const userRoutes = require('./user');
const habitRoutes = require('./habit');

router.use('/users', userRoutes);
//router.use('/habit', habitRoutes);

module.exports = router;