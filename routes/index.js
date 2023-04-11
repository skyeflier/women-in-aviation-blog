const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const userRoutes = require('./userRoutes');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

// router.use('/blogs', blogRoutes);
// router.use('/users', userRoutes);

module.exports = router;

// const router = require('express').Router();

// const homeRoutes = require('./homeRoutes');
// const blogRoutes = require('./blogRoutes');
// const userRoutes = require('./userRoutes');

// router.use('/', homeRoutes);
// router.use('/', blogRoutes);
// router.use('/', userRoutes);


// module.exports = router;