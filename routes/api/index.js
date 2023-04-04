const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/', blogRoutes);
router.use('/', userRoutes);

module.exports = router;