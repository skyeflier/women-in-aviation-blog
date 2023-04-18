const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/', homeRoutes);
router.use('/api', userRoutes);
router.use('/api', blogRoutes);

module.exports = router;