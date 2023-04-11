const router = require('express').Router();

router.get('/login', (req, res) => {
    if (req.session.logged_in) { // If the user is already logged in, redirect the request to another route
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});
router.get('/', (req, res) => {
    if (req.session.logged_in) { // If the user is already logged in, redirect the request to another route
        res.redirect('/dashboard');
        return;
    }

    res.render('homepage');
});
router.get('/newBlog', (req, res) => {
    if (req.session.logged_in) { // If the user is already logged in, redirect the request to another route
        res.redirect('/dashboard');
        return;
    }

    res.render('newBlogForm');
});
router.get('/dashboard', (req, res) => {
    res.render("dashboard")
});

module.exports = router;